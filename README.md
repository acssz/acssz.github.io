# ACSSZ Website

Static website for the **Association of Chinese Students and Scholars in Zurich (ACSSZ / 苏黎世中国学生学者联合会)**.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React Router v7](https://reactrouter.com/) (SSR/SSG mode) |
| UI Library | [MUI v7](https://mui.com/) (Material UI) + Emotion CSS-in-JS |
| Language | TypeScript |
| Bundler | Vite |
| Carousel | [Embla Carousel](https://www.embla-carousel.com/) |

## Getting Started

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm run typecheck  # type check
```

## Page Structure

The main page is composed of sections stacked vertically in this order:

| Section | Anchor | Description |
|---|---|---|
| AppBar | — | Sticky nav with language & theme toggles |
| Hero | — | Auto-scrolling carousel |
| Events | `#events` | Event cards |
| Our Cooperation Partners | `#sponsors` | Partner logo pills |
| Departments | `#departments` | Department description cards |
| Useful Information | `#information` | Freshmen handbook (external iframe) |
| FAQ | `#faq` | Accordion Q&A |
| About Us | `#about` | Text, team table, and photo |
| Contact Us | `#footer` | Email, WeChat, social links |
| Copyright | — | CC BY-NC-ND 4.0 |

See [`docs/page-structure.drawio`](docs/page-structure.drawio) for a visual diagram of sections, navigation links, and external URLs. Open with [draw.io](https://app.diagrams.net/).

## License

Content is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
