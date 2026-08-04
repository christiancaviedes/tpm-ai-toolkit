# Master Animation Prompt (from user's reference reel)

Used as the style/motion foundation for every scene clip. Since the Higgsfield API
generates one clip per source image, this master prompt is adapted per room — the
per-clip prompt keeps this language and appends the room's named camera move from
the re-walkthrough-pro camera-move table.

## Master prompt

> Using all provided home listing photos as references, generate a single, seamless
> first-person walkthrough that begins outside the property and naturally enters
> through the front door. Follow a realistic path through every room in logical
> sequence, maintaining perfect spatial consistency and accurate room-to-room
> connections. Preserve the exact architecture, layout, furniture placement,
> finishes, colors, décor, lighting, and proportions shown in the reference images.
> The movement should feel like a professional real estate videographer operating a
> stabilized gimbal, with smooth walking motion, realistic head-height perspective,
> natural turns around corners, and continuous movement through hallways and
> doorways. Prioritize faithful reconstruction of the property over cinematic
> creativity. Use photorealistic rendering, natural daylight, realistic depth,
> parallax, and high-detail textures. Do not invent rooms, change layouts, redesign
> spaces, add furniture, people, text, logos, or objects. No cuts, jump transitions,
> teleporting, floating camera, distortion, hallucinated features, or camera shake.
> The final result should feel like an authentic luxury real estate walkthrough
> filmed in a single continuous take.

## Per-clip adaptation template

> Professional real estate videographer operating a stabilized gimbal at realistic
> head height. {CAMERA_MOVE_SENTENCE}. Smooth, slow, continuous motion — a single
> take with no cuts. Preserve the exact architecture, layout, furniture placement,
> finishes, colors, décor, lighting, and proportions of the source photo. Natural
> daylight, photorealistic rendering, realistic depth and parallax, high-detail
> textures. Do not invent rooms, change layouts, add furniture, people, text,
> logos, or objects. No jump transitions, floating camera, distortion, hallucinated
> features, or camera shake.
