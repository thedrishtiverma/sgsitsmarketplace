<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the SGSITS visual system compositional: reuse the highlighter, margin marks, resource glyphs, stickers, and paper patterns instead of adding unrelated graphics, because recognition comes from repetition.
- Theme switching uses a root `.dark` class and the `sgsits-theme` preference key, because every shared semantic color must change together.
