#!/usr/bin/env bash
# Generate all images for insulationinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/insulationinsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — INSULATION CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic professional insulation contractor in full protective gear spraying closed-cell spray polyurethane foam on commercial building wall, clean professional construction photography, natural daylight, safety equipment visible, high detail, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of insulation contractor crew working on large commercial building insulation project, workers with spray foam equipment and ladders on exterior scaffolding, professional jobsite photography, blue sky, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a confident professional insulation contractor standing in front of spray foam equipment truck, friendly professional expression, work clothes, clean natural light, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide shot of professional spray foam insulation crew working on commercial building exterior, green insulation foam visible on wall sections, clean professional construction site photography, daylight, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic insulation contractor crew installing blown-in insulation in residential attic, hard hats and safety masks, pink blown insulation being applied, clean professional construction photography, warm natural light, no text" 4

gen "spray-foam-liability.jpg" \
  "Photorealistic close-up of spray foam insulation professional in full PPE including respirator and protective suit applying spray polyurethane foam to commercial building wall cavity, detailed foam texture visible, professional photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic professional spray foam rig with proportioner unit heated hose and generator loaded on contractor trailer, organized equipment, clean concrete yard setting, professional equipment photography, bright daylight, no text" 4

gen "workers-comp.jpg" \
  "Photorealistic insulation contractor worker in hard hat and safety gear installing batt insulation in residential attic, careful professional work, natural light, construction photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic professional insulation contractor work truck and spray rig trailer parked at job site, company vehicle, clean commercial vehicle photography, blue sky, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic professional spray foam contractor in complete protective gear including respirator chemical resistant suit and gloves applying spray foam insulation in commercial building cavity, safety focus, professional photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic wide shot of large commercial insulation project with multiple contractors working on major commercial building exterior, scaffolding and lift equipment, professional construction site photography, daylight, no text" 4

gen "surety-bonds.jpg" \
  "Photorealistic professional insulation contractor reviewing construction blueprints and contract documents at job site with hard hat and work clothes, natural light, business professional photography, no text" 4

gen "inland-marine.jpg" \
  "Photorealistic professional insulation contractor spray rig trailer being towed on highway, equipment securely loaded, professional transport photography, clean blue sky, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
