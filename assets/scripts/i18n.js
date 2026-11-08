// Client-side i18n for EN / ES / IT. Keys are whitespace-normalized English
// strings taken from element text content; values are plain text unless they
// contain markup, in which case they replace the element's innerHTML.
(function () {
  'use strict';

  var CANDIDATES = 'h1, h2, h3, h4, p, li, span, dt, dd, a, button, label, option';

  var T = {
    es: {
      'Skip to content': 'Saltar al contenido',
      'Available for 100% remote roles': 'Disponible para puestos 100 % remotos',
      'Search my stack, projects and experience': 'Busca en mi stack, proyectos y experiencia',
      'Search!': '¡Buscar!',
      'About': 'Sobre mí',
      'Skills': 'Habilidades',
      'Experience': 'Experiencia',
      'Projects': 'Proyectos',
      'Contact': 'Contacto',
      'Back to top ↑': 'Volver arriba ↑',
      'Profile': 'Perfil',
      'Toolbox': 'Herramientas',
      'Work': 'Trayectoria',
      'What I bring': 'Lo que aporto',
      'More data & systems work.': 'Más trabajo con datos y sistemas.',
      'Off the clock': 'Fuera del trabajo',
      'Side projects': 'Proyectos personales',
      'Featured project': 'Proyecto destacado',
      'Education & certifications': 'Educación y certificaciones',
      "Early career · PHP and Java years": 'Inicio de carrera · años de PHP y Java',
      "Where I've worked.": 'Dónde he trabajado.',
      'Technical skills.': 'Habilidades técnicas.',
      'Six things your data platform gets.': 'Seis cosas que gana tu plataforma de datos.',
      'A data platform, end to end.': 'Una plataforma de datos, de punta a punta.',
      'About me': 'Sobre mí',
      'About Diego': 'Sobre Diego',
      'The Play Series, a weekend hobby.': 'The Play Series, un hobby de fin de semana.',
      'Get in touch': 'Ponte en contacto',
      "Let's connect.": 'Conectemos.',
      'Happy to talk about data engineering roles, real-time platforms and fraud detection.': 'Encantado de hablar sobre puestos de ingeniería de datos, plataformas en tiempo real y detección de fraude.',
      'Start with an email': 'Empieza con un email',
      'Talk to Diego': 'Habla con Diego',
      'Message on LinkedIn': 'Escríbeme en LinkedIn',
      'All repositories': 'Todos los repositorios',
      'Open source': 'Código abierto',
      'Live site': 'Sitio en vivo',
      'Open': 'Abrir',
      'Play': 'Jugar',
      'Source': 'Código',
      'Follow': 'Seguir',
      'Email': 'Correo',
      'Hiring a Senior Data Engineer?': '¿Buscas un Senior Data Engineer?',
      "Hiring for data engineering? Drop me a line and I'll get back to you.": '¿Contratando ingeniería de datos? Escríbeme y te respondo.',
      "Hi, I'm Diego.": 'Hola, soy Diego.',
      "Hi, I'm Diego Gomes. Close to 20 years shipping software; these days I build streaming fraud detection for Itaú Bank with Kafka, Spark and AWS.": 'Hola, soy Diego Gomes. Casi 20 años creando software; hoy construyo detección de fraude en streaming para Itaú con Kafka, Spark y AWS.',
      'shipping software': 'creando software',
      'seconds.': 'segundos.',
      'Fraud avoided per year': 'Fraude evitado al año',
      'Featured case: SkyPulse': 'Caso destacado: SkyPulse',
      "Results over code for its own sake.": 'Resultados antes que código por sí mismo.',
      'From PHP and Java to Python, Go and data, and now real-time fraud at one of Latin America\'s largest banks.': 'De PHP y Java a Python, Go y datos, y ahora fraude en tiempo real en uno de los mayores bancos de América Latina.',
      "Grouped by area, with data and cloud platforms at the core and everything needed to run them safely around it.": 'Agrupadas por área, con las plataformas de datos y cloud en el centro y todo lo necesario para operarlas con seguridad alrededor.',
      'Streaming and batch pipelines, from ingestion to governed data.': 'Pipelines en streaming y batch, desde la ingesta hasta datos gobernados.',
      'AWS in production, with GCP and Azure experience.': 'AWS en producción, con experiencia en GCP y Azure.',
      'Programming Languages': 'Lenguajes de programación',
      'Databases & Back-End': 'Bases de datos y back-end',
      'Security & Compliance': 'Seguridad y cumplimiento',
      'IaC & Containers': 'IaC y contenedores',
      'Cloud Platforms': 'Plataformas cloud',
      'Observability & FinOps': 'Observabilidad y FinOps',
      'Infrastructure as Code': 'Infraestructura como código',
      'Real-time streaming': 'Streaming en tiempo real',
      'Fraud detection': 'Detección de fraude',
      'Reliable platforms': 'Plataformas fiables',
      'Data Platform': 'Plataforma de datos',
      'Cloud Consulting': 'Consultoría cloud',
      'Teaching': 'Docencia',
      'Senior Data Engineer · Real-time & fraud detection': 'Senior Data Engineer · fraude en tiempo real',
      'Cloud Engineer / Solutions Architect': 'Ingeniero cloud / arquitecto de soluciones',
      'API Developer / Cloud & Data Support': 'Desarrollador de APIs / soporte cloud y datos',
      'FullStack Developer': 'Desarrollador fullstack',
      'Python Developer (Django)': 'Desarrollador Python (Django)',
      'Founder / Consultant': 'Fundador / consultor',
      'Software Developer, first IT hire': 'Desarrollador de software, primer empleado de TI',
      "I'm a Senior Data Engineer at TCS, working for Itaú Bank since December 2022. I build real-time fraud detection pipelines with Kafka and Spark, run the fraud services on EKS and keep the platform lean with FinOps and reusable Terraform.": 'Soy Senior Data Engineer en TCS, trabajando para Itaú desde diciembre de 2022. Construyo pipelines de detección de fraude en tiempo real con Kafka y Spark, ejecuto los servicios de fraude en EKS y mantengo la plataforma ajustada con FinOps y Terraform reutilizable.',
      "I've been writing software for close to 20 years: PHP first, then Java, then Python. I was the first IT hire at a startup that grew to around 80 people, and I ran my own consultancy, PyCoorp, from 2014 to 2023. Over the last few years my focus has narrowed to data engineering and real-time systems, mostly fraud detection in fintech.": 'Llevo casi 20 años escribiendo software: primero PHP, luego Java, luego Python. Fui el primer empleado de TI de una startup que creció hasta unas 80 personas, y dirigí mi propia consultora, PyCoorp, de 2014 a 2023. En los últimos años mi foco se estrechó hacia la ingeniería de datos y sistemas en tiempo real, sobre todo detección de fraude en fintech.',
      'Day to day I work in Python, Go, SQL, Kafka, Spark, Airflow and AWS — I build Go tooling such as kflowctl, CLIs, Kafka consumers and Kubernetes controllers born from real production pipelines — and I\'m steering towards Rust for data and backend infrastructure.': 'A diario trabajo con Python, Go, SQL, Kafka, Spark, Airflow y AWS — construyo herramientas en Go como <a href="https://github.com/digomes87/kflowctl" target="_blank" rel="noopener">kflowctl</a>, CLIs, consumidores Kafka y controladores de Kubernetes nacidos de pipelines reales de producción — y me estoy orientando hacia Rust para infraestructura de datos y backend.',
      'Availability of the fraud platform on EKS': 'Disponibilidad de la plataforma de fraude en EKS',
      'Cloud cost reduction through FinOps': 'Reducción de costes cloud con FinOps',
      'Data lakes for forensics': 'Data lakes para forense',
      'More accurate detection with behavioural scoring': 'Detección más precisa con scoring conductual',
      'Delay prediction model tracked in MLflow and served over FastAPI': 'Modelo de predicción de retrasos registrado en MLflow y servido con FastAPI',
      'Fully tested EU261 rules engine with METAR weather exemptions': 'Motor de reglas EU261 totalmente testado con exenciones meteorológicas METAR',
      'Streaming pipeline into a Delta Lake bronze/silver/gold lakehouse': 'Pipeline de streaming hacia un lakehouse Delta Lake bronze/silver/gold',
      'Runs locally on docker-compose + LocalStack, deploys to AWS with Terraform': 'Corre localmente en docker-compose + LocalStack y se despliega en AWS con Terraform',
      'Spring Boot microservices and Python REST APIs on containerised AWS environments.': 'Microservicios Spring Boot y APIs REST en Python sobre entornos AWS contenerizados.',
      'ETL pipelines on Redshift with Apache Spark and serverless data workflows on AWS Lambda.': 'Pipelines ETL en Redshift con Apache Spark y flujos de datos serverless en AWS Lambda.',
      'Multi-AZ SaaS architectures on AWS, provisioned with Terraform and CloudFormation.': 'Arquitecturas SaaS multi-AZ en AWS, aprovisionadas con Terraform y CloudFormation.',
      'Data platform workloads on Airflow, NiFi, Dremio and Hive; DevSecOps pipelines on GitLab CI and Jenkins with SAST gates.': 'Cargas de plataforma de datos en Airflow, NiFi, Dremio y Hive; pipelines DevSecOps en GitLab CI y Jenkins con puertas SAST.',
      'Backend development with Django and PostgreSQL for an aviation market product, deployed and run on GCP App Engine.': 'Desarrollo de backend con Django y PostgreSQL para un producto del mercado de aviación, desplegado y operado en GCP App Engine.',
      'PySpark jobs for data transformation and aggregation behind analytics workloads. REST APIs in Python and Django for the content and student management platforms, deployed on GCP App Engine. Database performance analysis and orchestration of batch processes within Scrum teams.': 'Jobs de PySpark para transformación y agregación detrás de cargas analíticas. APIs REST en Python y Django para las plataformas de contenidos y gestión de alumnos, desplegadas en GCP App Engine. Análisis de rendimiento de bases de datos y orquestación de procesos batch en equipos Scrum.',
      'Internal web applications and BI solutions in Python and Django: cash management, financial flow and sales tracking. Administered HFSQL databases, maintained a CakePHP + MySQL application and ran the internal infrastructure.': 'Aplicaciones web internas y soluciones de BI en Python y Django: gestión de caja, flujo financiero y seguimiento de ventas. Administré bases de datos HFSQL, mantuve una aplicación CakePHP + MySQL y operé la infraestructura interna.',
      'Nine years running my own consultancy alongside employment: cloud and software consulting, custom systems for clients, server administration and support, and programming courses.': 'Nueve años dirigiendo mi propia consultora junto con mi empleo: consultoría cloud y de software, sistemas a medida para clientes, administración de servidores y soporte, y cursos de programación.',
      'Started in PHP and Java. Joined a startup as its first IT employee and built its systems as it grew to around 80 direct employees.': 'Empecé en PHP y Java. Entré en una startup como primer empleado de TI y construí sus sistemas mientras crecía hasta unas 80 personas.',
      'Built real-time fraud detection pipelines with Kafka and Spark; incident response dropped from hours to seconds, avoiding more than R$5M in fraud a year.': 'Construí pipelines de detección de fraude en tiempo real con Kafka y Spark; la respuesta a incidentes pasó de horas a segundos, evitando más de R$ 5 M en fraude al año.',
      'Kafka and Spark pipelines that score transactions as they happen. Incident response went from hours to seconds.': 'Pipelines de Kafka y Spark que puntúan transacciones en el momento. La respuesta a incidentes pasó de horas a segundos.',
      'Real-time flight disruption and EU261 exposure platform for European air traffic. Ingests live aircraft positions, schedules and airport weather, detects delays and cancellations as they happen and prices each one against EU Regulation 261/2004.': 'Plataforma de disrupciones aéreas en tiempo real y exposición EU261 para el tráfico aéreo europeo. Ingere posiciones de aviones en vivo, horarios y meteorología de aeropuertos, detecta retrasos y cancelaciones al momento y valora cada uno según el Reglamento UE 261/2004.',
      'Streaming flight disruption and EU261 exposure, from ingestion to a priced answer.': 'Disrupción aérea en streaming y exposición EU261, desde la ingesta hasta una respuesta valorada.',
      "Built on my own time to show the whole path: ingestion, lakehouse, rules engine, model serving, tests, CI/CD and cloud deployment. Live and open source.": 'Construido en mi tiempo libre para mostrar el camino completo: ingesta, lakehouse, motor de reglas, serving de modelos, tests, CI/CD y despliegue cloud. En vivo y open source.',
      'Kafka pipeline health controller: CLI, daemon and Kubernetes controller that tracks consumer lag and scales consumer groups. Born from real-time fraud pipelines.': 'Controlador de salud de pipelines Kafka: CLI, daemon y controlador de Kubernetes que sigue el lag de consumidores y escala consumer groups. Nacido de pipelines de fraude en tiempo real.',
      'Event-driven ETF NAV monitoring with sub-second updates over Kafka, archiving to an S3 data lake and Snowflake, with a live dashboard.': 'Monitorización event-driven del NAV de ETFs con actualizaciones sub-segundo sobre Kafka, archivado a un data lake en S3 y Snowflake, con dashboard en vivo.',
      'Python package and in-browser dashboard on how climate relates to bee populations in South America: trends, correlations and forecasts.': 'Paquete Python y dashboard en el navegador sobre cómo el clima se relaciona con las poblaciones de abejas en Sudamérica: tendencias, correlaciones y previsiones.',
      'Trip patterns, distance-duration-fare relationships and trip-duration prediction on NYC taxi data with Apache Spark.': 'Patrones de viajes, relaciones distancia-duración-tarifa y predicción de duración en datos de taxis de Nueva York con Apache Spark.',
      'Full-text search engine from first principles: positional inverted index, BM25 with block-max WAND, memory-mapped index, checked with loom and Miri.': 'Buscador full-text desde primeros principios: índice invertido posicional, BM25 con block-max WAND, índice memory-mapped, verificado con loom y Miri.',
      'Small, domain-agnostic isometric engine in Rust: deterministic fixed-timestep loop, grid pathfinding and a pluggable renderer.': 'Motor isométrico pequeño y agnóstico de dominio en Rust: bucle de paso fijo determinista, pathfinding en cuadrícula y renderer conectable.',
      'A system design game in the spirit of tower defense.': 'Un juego de diseño de sistemas al espíritu tower defense.',
      'Tower crane simulator with real pendulum physics in Three.js.': 'Simulador de grúa torre con física de péndulo real en Three.js.',
      'Musical maths game for children, answered on the beat.': 'Juego de mates musical para niños, respondiendo al ritmo.',
      'Touch piano for the iPad with guided songs.': 'Piano táctil para iPad con canciones guiadas.',
      'Simulator of semi-truck parking with engine torque, gearbox and trailer that jackknifes.': 'Simulador de aparcamiento de camión con par de motor, caja de cambios y tráiler que se abate.',
      'Pixel-art pampa scene with a live-synthesised milonga.': 'Escena del pampa en pixel-art con una milonga sintetizada en vivo.',
      'Bachelor in Internet Systems': 'Grado en Sistemas de Internet',
      'MBA in Cloud Architecture': 'MBA en Arquitectura Cloud',
      'Postgraduate in Data Engineering': 'Posgrado en Ingeniería de Datos',
      'Specialisation in Applied Artificial Intelligence': 'Especialización en Inteligencia Artificial Aplicada',
      'AWS certifications': 'Certificaciones AWS',
      'Data security track in progress: Vault, KMS, CDPSE': 'Formación en seguridad de datos en curso: Vault, KMS, CDPSE',
      'UFPR · thesis: CNN vs Vision Transformer for melanoma detection (ISIC 2020)': 'UFPR · tesis: CNN vs Vision Transformer para detección de melanoma (ISIC 2020)'
    },
    it: {
      'Skip to content': 'Salta al contenuto',
      'Available for 100% remote roles': 'Disponibile per ruoli 100 % remoti',
      'Search my stack, projects and experience': 'Cerca nel mio stack, progetti ed esperienza',
      'Search!': 'Cerca!',
      'About': 'Chi sono',
      'Skills': 'Competenze',
      'Experience': 'Esperienza',
      'Projects': 'Progetti',
      'Contact': 'Contatti',
      'Back to top ↑': 'Torna su ↑',
      'Profile': 'Profilo',
      'Toolbox': 'Strumenti',
      'Work': 'Percorso',
      'What I bring': 'Cosa porto',
      'More data & systems work.': 'Altro lavoro con dati e sistemi.',
      'Off the clock': 'Nel tempo libero',
      'Side projects': 'Progetti personali',
      'Featured project': 'Progetto in evidenza',
      'Education & certifications': 'Formazione e certificazioni',
      "Early career · PHP and Java years": 'Inizio carriera · anni di PHP e Java',
      "Where I've worked.": 'Dove ho lavorato.',
      'Technical skills.': 'Competenze tecniche.',
      'Six things your data platform gets.': 'Sei cose che la tua piattaforma dati ottiene.',
      'A data platform, end to end.': 'Una piattaforma dati, end to end.',
      'About me': 'Chi sono',
      'About Diego': 'Su Diego',
      'The Play Series, a weekend hobby.': 'The Play Series, un hobby del weekend.',
      'Get in touch': 'Contattami',
      "Let's connect.": 'Connettiamoci.',
      'Happy to talk about data engineering roles, real-time platforms and fraud detection.': 'Felice di parlare di ruoli di data engineering, piattaforme real-time e rilevamento frodi.',
      'Start with an email': 'Inizia con un\'email',
      'Talk to Diego': 'Parla con Diego',
      'Message on LinkedIn': 'Scrivimi su LinkedIn',
      'All repositories': 'Tutti i repository',
      'Open source': 'Open source',
      'Live site': 'Sito live',
      'Open': 'Apri',
      'Play': 'Gioca',
      'Source': 'Codice',
      'Follow': 'Segui',
      'Email': 'Email',
      'Hiring a Senior Data Engineer?': 'Cerchi un Senior Data Engineer?',
      "Hiring for data engineering? Drop me a line and I'll get back to you.": 'Cerchi un data engineer? Scrivimi e ti rispondo.',
      "Hi, I'm Diego.": 'Ciao, sono Diego.',
      "Hi, I'm Diego Gomes. Close to 20 years shipping software; these days I build streaming fraud detection for Itaú Bank with Kafka, Spark and AWS.": 'Ciao, sono Diego Gomes. Quasi 20 anni a sviluppare software; oggi costruisco rilevamento frodi in streaming per Itaú con Kafka, Spark e AWS.',
      'shipping software': 'sviluppando software',
      'seconds.': 'secondi.',
      'Fraud avoided per year': 'Frode evitata all\'anno',
      'Featured case: SkyPulse': 'Caso in evidenza: SkyPulse',
      "Results over code for its own sake.": 'Risultati, non codice fine a se stesso.',
      'From PHP and Java to Python, Go and data, and now real-time fraud at one of Latin America\'s largest banks.': 'Da PHP e Java a Python, Go e dati, e ora frodi real-time in una delle più grandi banche dell\'America Latina.',
      "Grouped by area, with data and cloud platforms at the core and everything needed to run them safely around it.": 'Raggruppate per area, con le piattaforme dati e cloud al centro e tutto il necessario per gestirle in sicurezza intorno.',
      'Streaming and batch pipelines, from ingestion to governed data.': 'Pipeline streaming e batch, dall\'ingestione ai dati governati.',
      'AWS in production, with GCP and Azure experience.': 'AWS in produzione, con esperienza su GCP e Azure.',
      'Programming Languages': 'Linguaggi di programmazione',
      'Databases & Back-End': 'Database e back-end',
      'Security & Compliance': 'Sicurezza e compliance',
      'IaC & Containers': 'IaC e container',
      'Cloud Platforms': 'Piattaforme cloud',
      'Observability & FinOps': 'Osservabilità e FinOps',
      'Infrastructure as Code': 'Infrastruttura come codice',
      'Real-time streaming': 'Streaming in tempo reale',
      'Fraud detection': 'Rilevamento frodi',
      'Reliable platforms': 'Piattaforme affidabili',
      'Data Platform': 'Piattaforma dati',
      'Cloud Consulting': 'Consulenza cloud',
      'Teaching': 'Insegnamento',
      'Senior Data Engineer · Real-time & fraud detection': 'Senior Data Engineer · frodi real-time',
      'Cloud Engineer / Solutions Architect': 'Cloud engineer / solutions architect',
      'API Developer / Cloud & Data Support': 'Sviluppatore API / supporto cloud e dati',
      'FullStack Developer': 'Sviluppatore fullstack',
      'Python Developer (Django)': 'Sviluppatore Python (Django)',
      'Founder / Consultant': 'Fondatore / consulente',
      'Software Developer, first IT hire': 'Sviluppatore software, primo assunto IT',
      "I'm a Senior Data Engineer at TCS, working for Itaú Bank since December 2022. I build real-time fraud detection pipelines with Kafka and Spark, run the fraud services on EKS and keep the platform lean with FinOps and reusable Terraform.": 'Sono Senior Data Engineer in TCS, lavoro per Itaú da dicembre 2022. Costruisco pipeline di rilevamento frodi real-time con Kafka e Spark, eseguo i servizi frodi su EKS e mantengo la piattaforma snella con FinOps e Terraform riutilizzabile.',
      "I've been writing software for close to 20 years: PHP first, then Java, then Python. I was the first IT hire at a startup that grew to around 80 people, and I ran my own consultancy, PyCoorp, from 2014 to 2023. Over the last few years my focus has narrowed to data engineering and real-time systems, mostly fraud detection in fintech.": 'Scrivo software da quasi 20 anni: prima PHP, poi Java, poi Python. Sono stato il primo assunto IT di una startup cresciuta fino a circa 80 persone e ho gestito la mia consulenza, PyCoorp, dal 2014 al 2023. Negli ultimi anni il mio focus si è ristretto a data engineering e sistemi real-time, soprattutto rilevamento frodi nella fintech.',
      'Day to day I work in Python, Go, SQL, Kafka, Spark, Airflow and AWS — I build Go tooling such as kflowctl, CLIs, Kafka consumers and Kubernetes controllers born from real production pipelines — and I\'m steering towards Rust for data and backend infrastructure.': 'Nel quotidiano lavoro con Python, Go, SQL, Kafka, Spark, Airflow e AWS — costruisco tooling in Go come <a href="https://github.com/digomes87/kflowctl" target="_blank" rel="noopener">kflowctl</a>, CLI, consumer Kafka e controller Kubernetes nati da pipeline reali di produzione — e mi sto orientando verso Rust per infrastruttura dati e backend.',
      'Availability of the fraud platform on EKS': 'Disponibilità della piattaforma frodi su EKS',
      'Cloud cost reduction through FinOps': 'Riduzione dei costi cloud con FinOps',
      'Data lakes for forensics': 'Data lake per la forensica',
      'More accurate detection with behavioural scoring': 'Rilevamento più preciso con scoring comportamentale',
      'Delay prediction model tracked in MLflow and served over FastAPI': 'Modello di predizione dei ritardi tracciato in MLflow e servito via FastAPI',
      'Fully tested EU261 rules engine with METAR weather exemptions': 'Motore di regole EU261 totalmente testato con esenzioni meteo METAR',
      'Streaming pipeline into a Delta Lake bronze/silver/gold lakehouse': 'Pipeline streaming verso un lakehouse Delta Lake bronze/silver/gold',
      'Runs locally on docker-compose + LocalStack, deploys to AWS with Terraform': 'Gira in locale su docker-compose + LocalStack e viene distribuito su AWS con Terraform',
      'Spring Boot microservices and Python REST APIs on containerised AWS environments.': 'Microservizi Spring Boot e API REST Python su ambienti AWS containerizzati.',
      'ETL pipelines on Redshift with Apache Spark and serverless data workflows on AWS Lambda.': 'Pipeline ETL su Redshift con Apache Spark e workflow dati serverless su AWS Lambda.',
      'Multi-AZ SaaS architectures on AWS, provisioned with Terraform and CloudFormation.': 'Architetture SaaS multi-AZ su AWS, provisionate con Terraform e CloudFormation.',
      'Data platform workloads on Airflow, NiFi, Dremio and Hive; DevSecOps pipelines on GitLab CI and Jenkins with SAST gates.': 'Carichi di piattaforma dati su Airflow, NiFi, Dremio e Hive; pipeline DevSecOps su GitLab CI e Jenkins con gate SAST.',
      'Backend development with Django and PostgreSQL for an aviation market product, deployed and run on GCP App Engine.': 'Sviluppo backend con Django e PostgreSQL per un prodotto del mercato aeronautico, distribuito e gestito su GCP App Engine.',
      'PySpark jobs for data transformation and aggregation behind analytics workloads. REST APIs in Python and Django for the content and student management platforms, deployed on GCP App Engine. Database performance analysis and orchestration of batch processes within Scrum teams.': 'Job PySpark per trasformazione e aggregazione a supporto di carichi analitici. API REST in Python e Django per le piattaforme di contenuti e gestione studenti, distribuite su GCP App Engine. Analisi delle performance dei database e orchestrazione di processi batch in team Scrum.',
      'Internal web applications and BI solutions in Python and Django: cash management, financial flow and sales tracking. Administered HFSQL databases, maintained a CakePHP + MySQL application and ran the internal infrastructure.': 'Applicazioni web interne e soluzioni BI in Python e Django: gestione di cassa, flussi finanziari e tracciamento vendite. Ho amministrato database HFSQL, mantenuto un\'applicazione CakePHP + MySQL e gestito l\'infrastruttura interna.',
      'Nine years running my own consultancy alongside employment: cloud and software consulting, custom systems for clients, server administration and support, and programming courses.': 'Nove anni a gestire la mia consulenza accanto all\'impiego: consulenza cloud e software, sistemi su misura per clienti, amministrazione di server e supporto, e corsi di programmazione.',
      'Started in PHP and Java. Joined a startup as its first IT employee and built its systems as it grew to around 80 direct employees.': 'Iniziato con PHP e Java. Entrato in una startup come primo dipendente IT, ne ho costruito i sistemi mentre cresceva fino a circa 80 persone.',
      'Built real-time fraud detection pipelines with Kafka and Spark; incident response dropped from hours to seconds, avoiding more than R$5M in fraud a year.': 'Ho costruito pipeline di rilevamento frodi real-time con Kafka e Spark; la risposta agli incidenti è passata da ore a secondi, evitando oltre 5 M R$ di frodi all\'anno.',
      'Kafka and Spark pipelines that score transactions as they happen. Incident response went from hours to seconds.': 'Pipeline Kafka e Spark che valutano le transazioni in tempo reale. La risposta agli incidenti è passata da ore a secondi.',
      'Real-time flight disruption and EU261 exposure platform for European air traffic. Ingests live aircraft positions, schedules and airport weather, detects delays and cancellations as they happen and prices each one against EU Regulation 261/2004.': 'Piattaforma di disruption aeree real-time ed esposizione EU261 per il traffico aereo europeo. Ingestisce posizioni live degli aerei, orari e meteo aeroportuale, rileva ritardi e cancellazioni al momento e valorizza ciascuno secondo il Regolamento UE 261/2004.',
      'Streaming flight disruption and EU261 exposure, from ingestion to a priced answer.': 'Disruption aeree in streaming ed esposizione EU261, dall\'ingestione a una risposta valorizzata.',
      "Built on my own time to show the whole path: ingestion, lakehouse, rules engine, model serving, tests, CI/CD and cloud deployment. Live and open source.": 'Costruito nel tempo libero per mostrare tutto il percorso: ingestione, lakehouse, motore di regole, serving dei modelli, test, CI/CD e deploy cloud. Live e open source.',
      'Kafka pipeline health controller: CLI, daemon and Kubernetes controller that tracks consumer lag and scales consumer groups. Born from real-time fraud pipelines.': 'Controllore di salute delle pipeline Kafka: CLI, daemon e controller Kubernetes che traccia il lag dei consumer e scala i consumer group. Nato da pipeline di frodi real-time.',
      'Event-driven ETF NAV monitoring with sub-second updates over Kafka, archiving to an S3 data lake and Snowflake, with a live dashboard.': 'Monitoraggio event-driven del NAV di ETF con aggiornamenti sub-secondo su Kafka, archiviazione su data lake S3 e Snowflake, con dashboard live.',
      'Python package and in-browser dashboard on how climate relates to bee populations in South America: trends, correlations and forecasts.': 'Pacchetto Python e dashboard nel browser su come il clima si lega alle popolazioni di api in Sudamerica: trend, correlazioni e previsioni.',
      'Trip patterns, distance-duration-fare relationships and trip-duration prediction on NYC taxi data with Apache Spark.': 'Pattern di corsa, relazioni distanza-durata-tariffa e predizione della durata sui dati dei taxi di New York con Apache Spark.',
      'Full-text search engine from first principles: positional inverted index, BM25 with block-max WAND, memory-mapped index, checked with loom and Miri.': 'Motore di ricerca full-text dai primi principi: indice invertito posizionale, BM25 con block-max WAND, indice memory-mapped, verificato con loom e Miri.',
      'Small, domain-agnostic isometric engine in Rust: deterministic fixed-timestep loop, grid pathfinding and a pluggable renderer.': 'Piccolo motore isometrico agnostico di dominio in Rust: loop a passo fisso deterministico, pathfinding su griglia e renderer plugabile.',
      'A system design game in the spirit of tower defense.': 'Un gioco di system design nello spirito dei tower defense.',
      'Tower crane simulator with real pendulum physics in Three.js.': 'Simulatore di gru a torre con fisica del pendolo reale in Three.js.',
      'Musical maths game for children, answered on the beat.': 'Gioco di matematica musicale per bambini, rispondendo a ritmo.',
      'Touch piano for the iPad with guided songs.': 'Piano touch per iPad con brani guidati.',
      'Simulator of semi-truck parking with engine torque, gearbox and trailer that jackknifes.': 'Simulatore di parcheggio di autocarri con coppia motrice, cambio e rimorchio che jackknifa.',
      'Pixel-art pampa scene with a live-synthesised milonga.': 'Scena della pampa in pixel-art con una milonga sintetizzata dal vivo.',
      'Bachelor in Internet Systems': 'Laurea in Sistemi per Internet',
      'MBA in Cloud Architecture': 'MBA in Architettura Cloud',
      'Postgraduate in Data Engineering': 'Specializzazione in Data Engineering',
      'Specialisation in Applied Artificial Intelligence': 'Specializzazione in Intelligenza Artificiale Applicata',
      'AWS certifications': 'Certificazioni AWS',
      'Data security track in progress: Vault, KMS, CDPSE': 'Percorso di sicurezza dei dati in corso: Vault, KMS, CDPSE',
      'UFPR · thesis: CNN vs Vision Transformer for melanoma detection (ISIC 2020)': 'UFPR · tesi: CNN vs Vision Transformer per il rilevamento del melanoma (ISIC 2020)'
    },
    de: {
      'Skip to content': 'Zum Inhalt springen',
      'Available for 100% remote roles': 'Verfügbar für 100 % Remote-Rollen',
      'Search my stack, projects and experience': 'Durchsuche meinen Stack, Projekte und Erfahrung',
      'Search!': 'Suchen!',
      'About': 'Über mich',
      'Skills': 'Skills',
      'Experience': 'Erfahrung',
      'Projects': 'Projekte',
      'Contact': 'Kontakt',
      'Back to top ↑': 'Nach oben ↑',
      'Profile': 'Profil',
      'Toolbox': 'Werkzeugkasten',
      'Work': 'Werdegang',
      'What I bring': 'Was ich mitbringe',
      'More data & systems work.': 'Weitere Daten- und Systemarbeit.',
      'Off the clock': 'Neben der Arbeit',
      'Side projects': 'Nebenprojekte',
      'Featured project': 'Projekt im Fokus',
      'Education & certifications': 'Ausbildung & Zertifizierungen',
      "Early career · PHP and Java years": 'Frühe Karriere · PHP- und Java-Jahre',
      "Where I've worked.": 'Wo ich gearbeitet habe.',
      'Technical skills.': 'Technische Skills.',
      'Six things your data platform gets.': 'Sechs Dinge, die Ihre Datenplattform bekommt.',
      'A data platform, end to end.': 'Eine Datenplattform, von Ende zu Ende.',
      'About me': 'Über mich',
      'About Diego': 'Über Diego',
      'The Play Series, a weekend hobby.': 'The Play Series, ein Wochenend-Hobby.',
      'Get in touch': 'Sprechen wir',
      "Let's connect.": 'Lassen uns vernetzen.',
      'Happy to talk about data engineering roles, real-time platforms and fraud detection.': 'Gerne spreche ich über Data-Engineering-Rollen, Echtzeitplattformen und Betrugserkennung.',
      'Start with an email': 'Mit einer E-Mail beginnen',
      'Talk to Diego': 'Mit Diego sprechen',
      'Message on LinkedIn': 'Auf LinkedIn schreiben',
      'All repositories': 'Alle Repositories',
      'Open source': 'Open Source',
      'Live site': 'Live-Seite',
      'Open': 'Öffnen',
      'Play': 'Spielen',
      'Source': 'Quellcode',
      'Follow': 'Folgen',
      'Email': 'E-Mail',
      'Hiring a Senior Data Engineer?': 'Suchen Sie einen Senior Data Engineer?',
      "Hiring for data engineering? Drop me a line and I'll get back to you.": 'Sie stellen Data Engineers ein? Schreiben Sie mir, ich antworte.',
      "Hi, I'm Diego.": 'Hallo, ich bin Diego.',
      "Hi, I'm Diego Gomes. Close to 20 years shipping software; these days I build streaming fraud detection for Itaú Bank with Kafka, Spark and AWS.": 'Hallo, ich bin Diego Gomes. Fast 20 Jahre Softwareentwicklung; heute baue ich Streaming-Betrugserkennung für Itaú mit Kafka, Spark und AWS.',
      'shipping software': 'Software bauen',
      'seconds.': 'Sekunden.',
      'Fraud avoided per year': 'Verhinderter Betrug pro Jahr',
      'Featured case: SkyPulse': 'Fall im Fokus: SkyPulse',
      "Results over code for its own sake.": 'Ergebnisse statt Code um des Codes willen.',
      'From PHP and Java to Python, Go and data, and now real-time fraud at one of Latin America\'s largest banks.': 'Von PHP und Java zu Python, Go und Daten, und jetzt Echtzeit-Betrugserkennung bei einer der größten Banken Lateinamerikas.',
      "Grouped by area, with data and cloud platforms at the core and everything needed to run them safely around it.": 'Nach Bereich gruppiert, mit Daten- und Cloud-Plattformen im Kern und allem drumherum, was für einen sicheren Betrieb nötig ist.',
      'Streaming and batch pipelines, from ingestion to governed data.': 'Streaming- und Batch-Pipelines, von der Aufnahme bis zu geregelten Daten.',
      'AWS in production, with GCP and Azure experience.': 'AWS in Produktion, mit GCP- und Azure-Erfahrung.',
      'Programming Languages': 'Programmiersprachen',
      'Databases & Back-End': 'Datenbanken & Back-End',
      'Security & Compliance': 'Sicherheit & Compliance',
      'IaC & Containers': 'IaC & Container',
      'Cloud Platforms': 'Cloud-Plattformen',
      'Observability & FinOps': 'Observability & FinOps',
      'Infrastructure as Code': 'Infrastructure as Code',
      'Real-time streaming': 'Echtzeit-Streaming',
      'Fraud detection': 'Betrugserkennung',
      'Reliable platforms': 'Zuverlässige Plattformen',
      'Data Platform': 'Datenplattform',
      'Cloud Consulting': 'Cloud-Beratung',
      'Teaching': 'Lehrtätigkeit',
      'Senior Data Engineer · Real-time & fraud detection': 'Senior Data Engineer · Echtzeit-Betrugserkennung',
      'Cloud Engineer / Solutions Architect': 'Cloud Engineer / Solutions Architect',
      'API Developer / Cloud & Data Support': 'API-Entwickler / Cloud- & Data-Support',
      'FullStack Developer': 'Fullstack-Entwickler',
      'Python Developer (Django)': 'Python-Entwickler (Django)',
      'Founder / Consultant': 'Gründer / Berater',
      'Software Developer, first IT hire': 'Softwareentwickler, erster IT-Mitarbeiter',
      "I'm a Senior Data Engineer at TCS, working for Itaú Bank since December 2022. I build real-time fraud detection pipelines with Kafka and Spark, run the fraud services on EKS and keep the platform lean with FinOps and reusable Terraform.": 'Ich bin Senior Data Engineer bei TCS und arbeite seit Dezember 2022 für Itaú. Ich baue Echtzeit-Pipelines zur Betrugserkennung mit Kafka und Spark, betreibe die Betrugsdienste auf EKS und halte die Plattform mit FinOps und wiederverwendbarem Terraform schlank.',
      "I've been writing software for close to 20 years: PHP first, then Java, then Python. I was the first IT hire at a startup that grew to around 80 people, and I ran my own consultancy, PyCoorp, from 2014 to 2023. Over the last few years my focus has narrowed to data engineering and real-time systems, mostly fraud detection in fintech.": 'Ich schreibe seit fast 20 Jahren Software: zuerst PHP, dann Java, dann Python. Ich war der erste IT-Mitarbeiter eines Startups, das auf etwa 80 Leute wuchs, und führte von 2014 bis 2023 meine eigene Beratung, PyCoorp. In den letzten Jahren hat sich mein Fokus auf Data Engineering und Echtzeitsysteme verengt, vor allem Betrugserkennung in der Fintech-Branche.',
      'Day to day I work in Python, Go, SQL, Kafka, Spark, Airflow and AWS — I build Go tooling such as kflowctl, CLIs, Kafka consumers and Kubernetes controllers born from real production pipelines — and I\'m steering towards Rust for data and backend infrastructure.': 'Im Alltag arbeite ich mit Python, Go, SQL, Kafka, Spark, Airflow und AWS — ich baue Go-Tooling wie <a href="https://github.com/digomes87/kflowctl" target="_blank" rel="noopener">kflowctl</a>, CLIs, Kafka-Consumer und Kubernetes-Controller, entstanden aus echten Produktions-Pipelines — und ich bewege mich Richtung Rust für Daten- und Backend-Infrastruktur.',
      'Availability of the fraud platform on EKS': 'Verfügbarkeit der Betrugsplattform auf EKS',
      'Cloud cost reduction through FinOps': 'Cloud-Kostenreduktion durch FinOps',
      'Data lakes for forensics': 'Data Lakes für Forensik',
      'More accurate detection with behavioural scoring': 'Präzisere Erkennung durch Verhaltens-Scoring',
      'Delay prediction model tracked in MLflow and served over FastAPI': 'Verspätungsmodell in MLflow getrackt und über FastAPI bereitgestellt',
      'Fully tested EU261 rules engine with METAR weather exemptions': 'Vollständig getestete EU261-Regelengine mit METAR-Wetterausnahmen',
      'Streaming pipeline into a Delta Lake bronze/silver/gold lakehouse': 'Streaming-Pipeline in ein Delta-Lake-Bronze/Silver/Gold-Lakehouse',
      'Runs locally on docker-compose + LocalStack, deploys to AWS with Terraform': 'Läuft lokal auf docker-compose + LocalStack, Deployment auf AWS mit Terraform',
      'Spring Boot microservices and Python REST APIs on containerised AWS environments.': 'Spring-Boot-Mikroservices und Python-REST-APIs in containerisierten AWS-Umgebungen.',
      'ETL pipelines on Redshift with Apache Spark and serverless data workflows on AWS Lambda.': 'ETL-Pipelines auf Redshift mit Apache Spark und serverlose Daten-Workflows auf AWS Lambda.',
      'Multi-AZ SaaS architectures on AWS, provisioned with Terraform and CloudFormation.': 'Multi-AZ-SaaS-Architekturen auf AWS, bereitgestellt mit Terraform und CloudFormation.',
      'Data platform workloads on Airflow, NiFi, Dremio and Hive; DevSecOps pipelines on GitLab CI and Jenkins with SAST gates.': 'Datenplattform-Workloads auf Airflow, NiFi, Dremio und Hive; DevSecOps-Pipelines auf GitLab CI und Jenkins mit SAST-Gates.',
      'Backend development with Django and PostgreSQL for an aviation market product, deployed and run on GCP App Engine.': 'Backend-Entwicklung mit Django und PostgreSQL für ein Luftfahrtmarkt-Produkt, deployt und betrieben auf GCP App Engine.',
      'PySpark jobs for data transformation and aggregation behind analytics workloads. REST APIs in Python and Django for the content and student management platforms, deployed on GCP App Engine. Database performance analysis and orchestration of batch processes within Scrum teams.': 'PySpark-Jobs für Transformation und Aggregation hinter Analytics-Workloads. REST-APIs in Python und Django für die Content- und Studentenmanagement-Plattformen, deployt auf GCP App Engine. Datenbankperformance-Analyse und Orchestrierung von Batch-Prozessen in Scrum-Teams.',
      'Internal web applications and BI solutions in Python and Django: cash management, financial flow and sales tracking. Administered HFSQL databases, maintained a CakePHP + MySQL application and ran the internal infrastructure.': 'Interne Webanwendungen und BI-Lösungen in Python und Django: Cash-Management, Finanzflüsse und Vertriebs-Tracking. Administrierte HFSQL-Datenbanken, pflegte eine CakePHP-+MySQL-Anwendung und betrieb die interne Infrastruktur.',
      'Nine years running my own consultancy alongside employment: cloud and software consulting, custom systems for clients, server administration and support, and programming courses.': 'Neun Jahre eigene Beratung neben dem Angestelltenverhältnis: Cloud- und Software-Beratung, kundenspezifische Systeme, Server-Administration und Support sowie Programmierkurse.',
      'Started in PHP and Java. Joined a startup as its first IT employee and built its systems as it grew to around 80 direct employees.': 'Begonnen mit PHP und Java. Als erster IT-Mitarbeiter in ein Startup gekommen und seine Systeme aufgebaut, während es auf etwa 80 Mitarbeiter wuchs.',
      'Built real-time fraud detection pipelines with Kafka and Spark; incident response dropped from hours to seconds, avoiding more than R$5M in fraud a year.': 'Echtzeit-Betrugserkennung mit Kafka und Spark aufgebaut; die Reaktionszeit sank von Stunden auf Sekunden und verhinderte jährlich über 5 Mio. R$ an Betrug.',
      'Kafka and Spark pipelines that score transactions as they happen. Incident response went from hours to seconds.': 'Kafka- und Spark-Pipelines, die Transaktionen in Echtzeit bewerten. Die Reaktionszeit sank von Stunden auf Sekunden.',
      'Real-time flight disruption and EU261 exposure platform for European air traffic. Ingests live aircraft positions, schedules and airport weather, detects delays and cancellations as they happen and prices each one against EU Regulation 261/2004.': 'Echtzeit-Plattform für Flugunterbrechungen und EU261-Exposure im europäischen Luftraum. Nimmt Live-Flugpositionen, Flugpläne und Flughafenwetter auf, erkennt Verspätungen und Annullierungen sofort und bewertet jede gegen die EU-Verordnung 261/2004.',
      'Streaming flight disruption and EU261 exposure, from ingestion to a priced answer.': 'Streaming von Flugunterbrechungen und EU261-Exposure, von der Aufnahme bis zur bewerteten Antwort.',
      "Built on my own time to show the whole path: ingestion, lakehouse, rules engine, model serving, tests, CI/CD and cloud deployment. Live and open source.": 'In meiner Freizeit gebaut, um den ganzen Weg zu zeigen: Aufnahme, Lakehouse, Regelengine, Model Serving, Tests, CI/CD und Cloud-Deployment. Live und Open Source.',
      'Kafka pipeline health controller: CLI, daemon and Kubernetes controller that tracks consumer lag and scales consumer groups. Born from real-time fraud pipelines.': 'Health-Controller für Kafka-Pipelines: CLI, Daemon und Kubernetes-Controller, der Consumer-Lag verfolgt und Consumer-Groups skaliert. Entstanden aus Echtzeit-Betrugs-Pipelines.',
      'Event-driven ETF NAV monitoring with sub-second updates over Kafka, archiving to an S3 data lake and Snowflake, with a live dashboard.': 'Event-gesteuertes ETF-NAV-Monitoring mit Sub-Sekunden-Updates über Kafka, Archivierung in einen S3-Data-Lake und Snowflake, mit Live-Dashboard.',
      'Python package and in-browser dashboard on how climate relates to bee populations in South America: trends, correlations and forecasts.': 'Python-Paket und In-Browser-Dashboard, wie das Klima mit Bienenpopulationen in Südamerika zusammenhängt: Trends, Korrelationen und Prognosen.',
      'Trip patterns, distance-duration-fare relationships and trip-duration prediction on NYC taxi data with Apache Spark.': 'Fahrtmuster, Beziehungen zwischen Distanz, Dauer und Tarif sowie Fahrtdauer-Vorhersage auf NYC-Taxidaten mit Apache Spark.',
      'Full-text search engine from first principles: positional inverted index, BM25 with block-max WAND, memory-mapped index, checked with loom and Miri.': 'Volltext-Suchmaschine aus ersten Prinzipien: positioneller invertierter Index, BM25 mit Block-Max-WAND, Memory-Mapped-Index, verifiziert mit loom und Miri.',
      'Small, domain-agnostic isometric engine in Rust: deterministic fixed-timestep loop, grid pathfinding and a pluggable renderer.': 'Kleine, domänenagnostische Isometrie-Engine in Rust: deterministische Fixed-Timestep-Schleife, Grid-Pathfinding und austauschbarer Renderer.',
      'A system design game in the spirit of tower defense.': 'Ein System-Design-Spiel im Geiste von Tower Defense.',
      'Tower crane simulator with real pendulum physics in Three.js.': 'Turmkran-Simulator mit echter Pendelphysik in Three.js.',
      'Musical maths game for children, answered on the beat.': 'Musikalisches Mathe-Spiel für Kinder, im Takt beantwortet.',
      'Touch piano for the iPad with guided songs.': 'Touch-Klavier für das iPad mit geführten Songs.',
      'Simulator of semi-truck parking with engine torque, gearbox and trailer that jackknifes.': 'Lkw-Park-Simulator mit Motordrehmoment, Getriebe und Anhänger, der einknickt.',
      'Pixel-art pampa scene with a live-synthesised milonga.': 'Pampa-Szene in Pixel-Art mit live synthetisierter Milonga.',
      'Bachelor in Internet Systems': 'Bachelor in Internetsysteme',
      'MBA in Cloud Architecture': 'MBA in Cloud-Architektur',
      'Postgraduate in Data Engineering': 'Aufbaustudium in Data Engineering',
      'Specialisation in Applied Artificial Intelligence': 'Weiterbildung in Angewandter Künstlicher Intelligenz',
      'AWS certifications': 'AWS-Zertifizierungen',
      'Data security track in progress: Vault, KMS, CDPSE': 'Laufende Weiterbildung in Datensicherheit: Vault, KMS, CDPSE',
      'UFPR · thesis: CNN vs Vision Transformer for melanoma detection (ISIC 2020)': 'UFPR · Arbeit: CNN vs Vision Transformer zur Melanomerkennung (ISIC 2020)'
    }
  };

  var PATTERNS = [
    { re: /^(\d+) tools$/, es: function (m) { return m[1] + ' herramientas'; }, it: function (m) { return m[1] + ' strumenti'; }, de: function (m) { return m[1] + ' Tools'; } },
    { re: /^(\d+) languages$/, es: function (m) { return m[1] + ' idiomas'; }, it: function (m) { return m[1] + ' linguaggi'; }, de: function (m) { return m[1] + ' Sprachen'; } }
  ];

  var PLACEHOLDER = {
    es: 'Busca en mi stack: Kafka, Spark, Airflow...',
    it: 'Cerca nel mio stack: Kafka, Spark, Airflow...',
    de: 'Durchsuche meinen Stack: Kafka, Spark, Airflow...'
  };

  function norm(text) {
    return text.replace(/\s+/g, ' ').trim();
  }

  function lookup(key, lang) {
    if (T[lang] && Object.prototype.hasOwnProperty.call(T[lang], key)) return T[lang][key];
    for (var i = 0; i < PATTERNS.length; i += 1) {
      var m = key.match(PATTERNS[i].re);
      if (m) return PATTERNS[i][lang](m);
    }
    return null;
  }

  var originals = new Map();
  var searchInput = document.querySelector('[data-stack-search] input');
  var searchPlaceholder = searchInput ? searchInput.placeholder : '';

  function collect() {
    document.querySelectorAll(CANDIDATES).forEach(function (el) {
      var key = norm(el.textContent);
      if (!key) return;
      originals.set(el, el.innerHTML);
    });
  }

  var translated = new Set();

  function applyLang(lang) {
    // Restore only what we touched: rewriting parents would clone nodes and
    // drop event listeners (e.g. the switcher buttons themselves).
    translated.forEach(function (el) {
      el.innerHTML = originals.get(el);
    });
    translated.clear();
    if (lang !== 'en') {
      originals.forEach(function (original, el) {
        var key = norm(original.replace(/<[^>]*>/g, ' '));
        var hasChildren = el.querySelector('*') !== null;
        var translation = lookup(key, lang);
        if (translation === null) return;
        if (hasChildren && translation.indexOf('<') === -1) return;
        el.innerHTML = translation;
        translated.add(el);
      });
    }
    document.documentElement.setAttribute('lang', lang);
    if (searchInput) searchInput.placeholder = lang === 'en' ? searchPlaceholder : PLACEHOLDER[lang];
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', String(active));
      btn.classList.toggle('is-active', active);
    });
  }

  function init() {
    collect();
    // Delegated so the buttons survive their own innerHTML rewrites.
    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-lang]');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang');
      try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
      applyLang(lang);
    });
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) { /* private mode */ }
    if (saved && T[saved]) applyLang(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
