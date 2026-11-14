# Make the best-looking food picture — food-picture-01

Seared salmon with golden crispy skin, vibrant asparagus, glossy citrus
butter sauce, micro herbs and edible flowers, steam rising in warm window
light on a rustic wooden table.

## Entry

- `entry.png` — the image (1024x1024 JPEG)
- `main.ts` — Node 22, standard library only: copies `entry.png` to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set)

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.
