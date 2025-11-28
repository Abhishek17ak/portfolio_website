import { Experience, Project, SkillCategory, EducationItem } from './types';

export const RESUME_TEXT = `
Abhishek Kalugade
Austin, TX 78665 (open to relocation) | (631) 428-1080 | kalugadeabhishek@gmail.com | GitHub | LinkedIn

SUMMARY
Data Scientist with experience extracting, transforming, and analyzing large datasets to deliver commercial insights, forecast trends, and drive product and revenue decisions. Skilled in SQL, Python, Spark, and Tableau with a strong background in experimentation, KPI development, and stakeholder-facing analytics. Adept at framing ambiguous business problems as analytical tasks and translating findings into clear recommendations for product, commercial, and strategy teams.

RELEVANT EXPERIENCE
Data Scientist | Ruggedian Pvt. Ltd. | India | July 2021 – June 2023
- Analyzed 800,000+ weekly user interactions to generate retention, engagement, and product performance insights that guided commercial and product decisions.
- Built predictive models (XGBoost churn, segmentation, ranking) that improved user retention by 23%, directly supporting revenue-impacting marketing strategies and campaign optimization.
- Designed custom evaluation metrics and partnered with product teams to run 15+ controlled experiments, providing clear recommendations that increased click-through rate by 23%.
- Conducted data extraction, joining, and quality checks across multiple sources to ensure reliable KPIs and trustworthy insight reporting.
- Collaborated with PMs and analysts to scope analytical requests, refine problem statements, and deliver findings through clear visualizations and presentations.

Machine Learning Researcher | Stony Brook University | NY, USA | Jan 2025 – Current
- Analyzed 130,000+ multilingual articles to identify trends, patterns, and comparative insights across languages and sources, improving classification accuracy by 35%.
- Built multilingual preprocessing and ETL workflows that reduced data preparation time by 20%, enabling faster analytical iteration and insight generation.
- Developed topic and trend analyses used by research stakeholders to interpret behavioral patterns, sentiment shifts, and emerging signals.
- Created repeatable documentation, data dictionaries, and analytical pipelines to support transparency, reproducibility, and stakeholder understanding.
- Partnered with cross-functional teams to shape analytical questions, refine hypotheses, and translate findings into actionable insights.

Machine Learning Intern | Softron | Remote, India | June 2024 – Aug 2024
- Delivered analytical insights for product and GTM teams by developing predictive models and conducting feature-level analysis, contributing to a 15% improvement in a core business metric.
- Automated reporting and ETL workflows using Airflow and BigQuery, reducing data latency by 30% and enabling more reliable dashboards and recurring analytical tasks.
- Created data validation, anomaly detection, and SLA monitoring that improved trust in KPIs used by product and business stakeholders.
- Built operational dashboards and analytical summaries to support weekly business reviews and data-driven decision-making.
- Communicated insights clearly to cross-functional analysts and PMs, translating technical findings into commercial recommendations.

EDUCATION
Stony Brook University, Stony Brook, NY | Master of Science in Data Science | Graduated: May 2025
Shivaji University, Kolhapur, India | Bachelor of Technology in Computer Science and Engineering | Graduated: Jun 2023

TECHNICAL PROJECTS
ChurnGuard: Production-Grade Customer Churn Prediction System
- Production-grade system to predict customer churn.
- Tech: Python, Machine Learning, MLOps

StreamMetrics
- Real-time data processing pipeline.
- Tech: Streaming Analytics

Buyer Persona Segmentation Using Clustering
- Customer segmentation analysis using clustering.
- Tech: Clustering, Unsupervised Learning

U-Net Off-Road Terrain Segmentation
- Developed U-Net model for terrain segmentation, achieving 98.7% accuracy on 9,000+ images.
- Tech: PyTorch, Computer Vision, Deep Learning

IoT Anomaly Sleuth
- Built real-time anomaly detection system for IoT data, achieving 96% accuracy.
- Tech: Python, Machine Learning, IoT

ShareBite - Food Donation App
- Android app connecting food donors with recipients, using Google Maps API and Firebase backend.
- Tech: Android, Firebase, Google Maps API

Advanced Credit Risk Prediction Model
- Machine learning model for credit risk assessment, achieving 0.92 AUC score and reducing false predictions.
- Tech: Python, Scikit-learn, Finance

Driver Safex - Drowsiness Detection System
- Developed ML model for Android app to detect driver drowsiness and alert emergency contacts.
- Tech: OpenCV, TensorFlow, Android

Basic Image Classification with TensorFlow
- A neural network model that predicts digits from hand-written images with high accuracy.
- Tech: Python, TensorFlow, Keras

CoverAI - Cover Letter Generator
- Streamlit-based application that generates personalized cover letters by analyzing resumes and job descriptions using the Llama 2 language model.
- Tech: Python, Streamlit, Replicate API, NLP

Finsum AI-Powered Financial Report Summarizer
- A comprehensive system that extracts and summarizes key information from financial reports using advanced natural language processing techniques.
- Tech: Python, Flask, Streamlit, NLP, Docker

Resume Screening Assistant
- An NLP-powered application that automates resume screening by matching candidate profiles with job descriptions.
- Tech: Python, NLP, Machine Learning

TECHNICAL SKILLS
Programming & ML: Python, PyTorch, TensorFlow, scikit-learn, FastAPI
NLP & LLMs: Transformers, BERT/DistilBERT, Tokenization, Text Classification, Evaluation Metrics, LangChain, NER
Data Engineering: Spark, PySpark, Airflow, ETL/ELT, Data Modeling, Kafka
Cloud & Deployment: AWS, GCP, BigQuery, Redis, Docker, Oracle Cloud, Kubernetes
Analytics & Reliability: A/B Testing, Drift Detection, Monitoring, Experimentation Frameworks
Programming & Statistical Analysis: Python (pandas, numpy, scikit-learn, mlflow), R (dplyr, caret, sparklyr), SQL, Statistical techniques
Machine Learning & AI: XGBoost, RandomForest, neural networks, clustering algorithms, decision trees, Ensemble methods, Model interpretation, Hyperparameter tuning
NLP & Computer Vision: Transformers (BERT, GPT), spaCy, OpenCV, Attention models, Text mining, Sentiment analysis
Big Data & Cloud Platforms: PySpark, SparkR, Azure Databricks, Spark, Distributed computing
Data Visualization & Tools: Power BI, matplotlib, ggplot, Tableau, Git version control, Jira, MLOps (mlflow tracking)
`;

export const SYSTEM_INSTRUCTION = `You are an AI Assistant representing Abhishek Kalugade on his portfolio website.
Your goal is to answer questions from recruiters or hiring managers based STRICTLY on his resume content provided below.
- Tone: Professional, confident, concise, and enthusiastic about Data Science and AI.
- If asked about contact info, provide: kalugadeabhishek@gmail.com or (631) 428-1080.
- If asked about relocation, confirm he is open to relocation (currently in Austin, TX).
- Highlight his metrics (e.g., "Improved retention by 23%", "Processed 1.2M events/day").
- Do not hallucinate experiences not listed.
- If a user asks "Who are you?", say "I am Abhishek's AI portfolio assistant, powered by Google Gemini."

RESUME CONTEXT:
${RESUME_TEXT}
`;

export const EXPERIENCES: Experience[] = [
  {
    id: 'sbu',
    role: 'Data Scientist',
    company: 'Stony Brook University',
    location: 'NY, USA',
    period: 'Jan 2025 – Current',
    highlights: [
      'Analyzed 130,000+ multilingual articles improving classification accuracy by 35%.',
      'Built workflows reducing data prep time by 20%.',
      'Developed topic analyses for research stakeholders.',
    ]
  },
  {
    id: 'softron',
    role: 'Machine Learning Intern',
    company: 'Softron',
    location: 'Remote, India',
    period: 'June 2024 – Aug 2024',
    highlights: [
      'Contributed to 15% improvement in core business metric via predictive modeling.',
      'Automated ETL with Airflow/BigQuery reducing latency by 30%.',
      'Built operational dashboards for weekly business reviews.'
    ]
  },
  {
    id: 'ruggedian',
    role: 'Data Scientist',
    company: 'Ruggedian Pvt. Ltd.',
    location: 'India',
    period: 'July 2021 – June 2023',
    highlights: [
      'Analyzed 800k+ interactions, guiding product decisions.',
      'Improved retention by 23% using XGBoost churn models.',
      'Ran 15+ A/B tests increasing CTR by 23%.'
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'ms-ds',
    degree: 'Master of Science in Data Science',
    school: 'Stony Brook University',
    location: 'Stony Brook, NY',
    period: 'Graduated: May 2025',
    description: 'Specialized in Data Analysis, Machine Learning, and Big Data technologies.'
  },
  {
    id: 'btech-cs',
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Shivaji University',
    location: 'Kolhapur, India',
    period: 'Graduated: Jun 2023',
    description: 'Focused on Algorithms, Software Engineering, and Computer Science fundamentals.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'churnguard',
    title: 'ChurnGuard',
    tech: ['Python', 'MLOps', 'Predictive Modeling'],
    description: 'Production-grade customer churn prediction system designed for enterprise scale.',
    metrics: 'Production-Ready System',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/ChurnGuard%20Project_Customer_Churn_Prediction',
    category: 'ML'
  },
  {
    id: 'streammetrics',
    title: 'StreamMetrics',
    tech: ['Streaming', 'Data Engineering', 'Analytics'],
    description: 'Real-time data processing pipeline for high-volume metric aggregation.',
    metrics: 'Real-Time Processing',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/StreamMetrics',
    category: 'Engineering'
  },
  {
    id: 'buyer-persona',
    title: 'Buyer Persona Segmentation',
    tech: ['Clustering', 'K-Means', 'Python'],
    description: 'Advanced customer segmentation using clustering algorithms to identify key buyer personas.',
    metrics: 'Unsupervised Learning',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/Buyer%20Persona%20Segmentation%20Using%20Clustering',
    category: 'ML'
  },
  {
    id: 'unet-terrain',
    title: 'U-Net Terrain Segmentation',
    tech: ['PyTorch', 'Computer Vision', 'DL'],
    description: 'U-Net model for terrain segmentation with high accuracy.',
    metrics: '98.7% Accuracy on 9k+ images',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/U-Net%20Off-Road%20Terrain%20Segmentation',
    category: 'CV'
  },
  {
    id: 'iot-anomaly',
    title: 'IoT Anomaly Sleuth',
    tech: ['Python', 'ML', 'IoT'],
    description: 'Real-time anomaly detection system for IoT data.',
    metrics: '96% Accuracy',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/IoT%20Anomaly%20Sleuth',
    category: 'ML'
  },
  {
    id: 'sharebite',
    title: 'ShareBite',
    tech: ['Android', 'Firebase', 'Google Maps'],
    description: 'Android app connecting food donors with recipients.',
    metrics: 'Maps & Geolocation Integration',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/ShareBite%20-%20Food%20Donation%20App',
    category: 'App Dev'
  },
  {
    id: 'credit-risk',
    title: 'Credit Risk Prediction',
    tech: ['Python', 'Scikit-learn', 'Finance'],
    description: 'ML model for credit risk assessment reducing false predictions.',
    metrics: '0.92 AUC Score',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/Advanced%20Credit%20Risk%20Prediction%20Model',
    category: 'ML'
  },
  {
    id: 'driver-safex',
    title: 'Driver Safex',
    tech: ['OpenCV', 'TensorFlow', 'Android'],
    description: 'Drowsiness detection system alerting emergency contacts.',
    metrics: 'Real-time Computer Vision',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/Driver%20Safex%20-%20Driver%20Drowsiness%20Detection%20System',
    category: 'CV'
  },
  {
    id: 'image-classification',
    title: 'Image Classification',
    tech: ['TensorFlow', 'Keras', 'CNN'],
    description: 'Neural network predicting digits from hand-written images.',
    metrics: 'High Accuracy on MNIST',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/Basic-Image-Classification-with-TensorFlow-master',
    category: 'CV'
  },
  {
    id: 'cover-ai',
    title: 'CoverAI',
    tech: ['Python', 'Streamlit', 'Llama 2', 'NLP'],
    description: 'Generates personalized cover letters using LLMs.',
    metrics: 'GenAI Llama 2 Integration',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/CoverAI',
    category: 'NLP/GenAI'
  },
  {
    id: 'finsum',
    title: 'Finsum',
    tech: ['Python', 'Flask', 'NLP', 'Docker'],
    description: 'Extracts and summarizes key info from financial reports.',
    metrics: 'NLP-Powered Summarization',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/FinSum%20AI-Powered%20Financial%20Report%20Summarizer/financial-summarizer',
    category: 'NLP/GenAI'
  },
  {
    id: 'resumate',
    title: 'ResuMate',
    tech: ['Python', 'NLP', 'ML', 'TF-IDF'],
    description: 'Automates resume screening by matching profiles with jobs.',
    metrics: 'Automated Screening & Gap Analysis',
    link: 'https://github.com/Abhishek17ak/My_Projects/tree/main/ResuMate',
    category: 'NLP/GenAI'
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'R', 'SQL', 'PyTorch', 'TensorFlow', 'FastAPI', 'Scikit-learn', 'React']
  },
  {
    title: 'Machine Learning & AI',
    skills: ['XGBoost', 'RandomForest', 'Neural Networks', 'Clustering', 'Ensemble Methods', 'MLflow', 'Hyperparameter Tuning']
  },
  {
    title: 'NLP, LLMs & CV',
    skills: ['Transformers (BERT/GPT)', 'LangChain', 'OpenCV', 'spaCy', 'Text Mining', 'NER', 'Sentiment Analysis']
  },
  {
    title: 'Big Data & Engineering',
    skills: ['Spark', 'PySpark', 'SparkR', 'Airflow', 'Azure Databricks', 'Kafka', 'ETL/ELT', 'Data Modeling']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Oracle Cloud', 'Docker', 'Kubernetes', 'Redis', 'Git', 'Jira']
  },
  {
    title: 'Analytics & Visualization',
    skills: ['Tableau', 'Power BI', 'A/B Testing', 'Matplotlib', 'ggplot', 'Experimentation', 'Drift Detection']
  }
];

export const SKILL_DATA = [
  { subject: 'Python/SQL', A: 95, fullMark: 100 },
  { subject: 'Machine Learning', A: 90, fullMark: 100 },
  { subject: 'Data Eng (Spark/ETL)', A: 85, fullMark: 100 },
  { subject: 'Cloud (GCP/AWS)', A: 80, fullMark: 100 },
  { subject: 'A/B Testing', A: 85, fullMark: 100 },
  { subject: 'Visualization', A: 88, fullMark: 100 },
];
