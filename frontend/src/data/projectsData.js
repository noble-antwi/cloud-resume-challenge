// Projects shown on /projects. Descriptions come from each repo's GitHub description.
const GITHUB = 'https://github.com/noble-antwi';

export const projects = [
  {
    id: 1,
    name: 'Cloud Resume Challenge',
    description:
      'This site. A React resume hosted on S3 and CloudFront, with a Lambda and DynamoDB visitor counter, infrastructure as code, and CI/CD.',
    tags: ['AWS', 'React', 'Serverless', 'IaC'],
    repo: `${GITHUB}/cloud-resume-challenge`,
  },
  {
    id: 2,
    name: 'Cloud Security Posture Dashboard',
    description:
      'Automated multi-cloud security assessment that scans for misconfigurations with Prowler and ScoutSuite, aggregates findings into one dashboard, and provides IaC-based remediation scripts.',
    tags: ['Multi-cloud', 'Prowler', 'ScoutSuite', 'IaC'],
    repo: `${GITHUB}/cloud-security-posture-dashboard`,
  },
  {
    id: 3,
    name: 'AWS Security Posture and Exposure Management',
    description:
      'Security Hub, Inspector, GuardDuty, and Automated Security Response working together for exposure analysis, automated remediation, and compliance monitoring, with 40+ automation playbooks.',
    tags: ['AWS', 'Security Hub', 'GuardDuty', 'Automation'],
    repo: `${GITHUB}/aws-security-posture-exposure-mgmt`,
  },
  {
    id: 4,
    name: 'Okta Security Monitoring Dashboard',
    description:
      'Automated Okta authentication log analyzer for threat detection, failed login monitoring, and MFA analytics, built for IAM incident response.',
    tags: ['Okta', 'IAM', 'Python', 'Detection'],
    repo: `${GITHUB}/okta-security-monitoring-dashboard`,
  },
  {
    id: 5,
    name: 'AWS Cost Optimizer',
    description:
      'Python CLI that finds idle EC2 instances, unattached EBS volumes, outdated snapshots, unused Elastic IPs, and idle RDS databases, with multi-format reporting.',
    tags: ['AWS', 'Python', 'FinOps', 'CLI'],
    repo: `${GITHUB}/aws-cost-optimizer`,
  },
  {
    id: 6,
    name: 'AWS WordPress Architecture Evolution',
    description:
      'Evolving a WordPress deployment from a single EC2 instance to an elastic, self-healing architecture using RDS, EFS, Auto Scaling, and an Application Load Balancer.',
    tags: ['AWS', 'EC2', 'RDS', 'Auto Scaling'],
    repo: `${GITHUB}/aws-wordpress-arch-evolution`,
  },
  {
    id: 7,
    name: 'Biira Bank Website',
    description:
      'Public site for Biira Bank, the fictional bank behind an enterprise security engineering lab.',
    tags: ['Cloudflare', 'Web security', 'Homelab'],
    repo: `${GITHUB}/biirabank-web`,
  },
];
