# Diego Gomes — Senior Data Engineer Portfolio

![Portfolio preview](assets/images/portfolio-preview.webp)

My personal portfolio. I've been writing software for close to 20 years — PHP first, then Java, then Python — and today I build real-time fraud detection pipelines with Kafka and Spark for Itaú Bank at TCS, running on AWS EKS and kept lean with FinOps and Terraform. Day to day I work in Python, Go, SQL, Kafka, Spark, Airflow and AWS, and I'm steering towards Rust for data and backend infrastructure. I also ran my own consultancy, PyCoorp, from 2014 to 2023: cloud and software consulting, server administration and support, and programming courses.

**Live**: [digomes87.github.io/Diego-Gomes-web-developer](https://digomes87.github.io/Diego-Gomes-web-developer/)

## The site

A single-page, content-driven portfolio: hero with stack search, about, work history, featured work, projects, the Play Series side projects, technical skills and contact. It has an EN / ES / IT language switcher in the top bar (persisted in `localStorage`), SEO structured data, sitemap and robots.txt, and Playwright browser tests for desktop and mobile that run in CI on every pull request.

## What you'll find there

- **Current role** — real-time fraud detection at TCS for Itaú Bank (since Dec 2022): Kafka and Spark pipelines that score transactions as they happen, fraud services on EKS, FinOps that cut cloud costs, and more than R$5M in fraud avoided per year.
- **Work history** — from first IT hire at a startup that grew to ~80 people, through Django full-stack years and cloud/SaaS architecture, to PyCoorp, nine years of my own consultancy.
- **Featured project: SkyPulse** — real-time flight disruption and EU261 exposure platform for European air traffic: live ingestion, Delta Lake lakehouse, a fully tested EU261 rules engine, delay prediction served over FastAPI, all built on my own time and open source.
- **Projects** — kflowctl (Go CLI/daemon/Kubernetes controller for Kafka consumer lag), QuantML (event-driven ETF NAV monitoring), NYC Taxi analytics with Spark, bees × climate analysis, a Rust full-text search engine (BM25, block-max WAND) and a small Rust isometric engine.
- **The Play Series** — weekend browser games held to the same habits as work (tests, CI, engine apart from UI): PlaySysDesigner, PlayGrua, PlayKids, PlayPiano, PlayDrive and PlayMate.
- **Skills** — streaming and batch data (Kafka, Spark, Airflow, Iceberg, dbt), AWS in production, Go/Python/Rust/Java, DevSecOps, security and compliance, IaC.

## Development workflow

- `develop` is the integration branch; `main` is what runs in production.
- Work happens on a feature branch and reaches `develop` through a pull request.
- When CI passes on a push to `develop`, the **Promote** workflow opens a `develop` to `main` pull request, merges it and deploys. No manual release step.
- Both branches are protected: changes land only through pull requests with a green CI.

**CI** (`.github/workflows/ci.yml`): HTML validation, local link check and browser tests (desktop and mobile Chromium) on every PR to `main`/`develop` and push to `develop`.
**Deploy** (`.github/workflows/deploy.yml`): on every push to `main`, runs CI and publishes to GitHub Pages.
**Promote** (`.github/workflows/promote.yml`): after CI succeeds on `develop`; skips if `develop` moved on or `main` is up to date.

## Contact

- **Email**: [diego.gomes87@gmail.com](mailto:diego.gomes87@gmail.com)
- **LinkedIn**: [linkedin.com/in/diego-go](https://linkedin.com/in/diego-go)
- **GitHub**: [github.com/digomes87](https://github.com/digomes87)

## License

Open source under the [MIT License](LICENSE).
