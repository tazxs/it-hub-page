import pkg from '@prisma/client';
import 'dotenv/config';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  const programs = [
    {
      slug: 'it-bootcamp',
      title: JSON.stringify({ kz: 'IT Bootcamp', ru: 'IT Bootcamp', en: 'IT Bootcamp' }),
      description: JSON.stringify({ kz: 'Веб-әзірлеу, Python және Data Science негіздері бойынша қарқынды курс', ru: 'Интенсивный курс по веб-разработке, Python и основам Data Science', en: 'Intensive course on web development, Python and Data Science basics' }),
      category: 'EDUCATION',
    },
    {
      slug: 'startup-accelerator',
      title: JSON.stringify({ kz: 'Startup Accelerator AHPC', ru: 'Startup Accelerator AHPC', en: 'Startup Accelerator AHPC' }),
      description: JSON.stringify({ kz: 'Стартаптарды қолдау: менторлық, қаржыландыру, нетворкинг', ru: 'Поддержка стартапов: менторство, финансирование, нетворкинг', en: 'Support for startups: mentoring, financing, networking' }),
      category: 'STARTUP',
    },
    {
      slug: 'devlab-coworking',
      title: JSON.stringify({ kz: 'DevLab — Open Coworking', ru: 'DevLab — Open Coworking', en: 'DevLab — Open Coworking' }),
      description: JSON.stringify({ kz: 'Жоғары жылдамдықты интернетпен және жабдықтармен жұмыс орны', ru: 'Рабочее пространство с высокоскоростным интернетом и оборудованием', en: 'Workspace with high-speed internet and equipment' }),
      category: 'COWORKING',
    },
    {
      slug: 'hackathon-series',
      title: JSON.stringify({ kz: 'Hackathon Series', ru: 'Hackathon Series', en: 'Hackathon Series' }),
      description: JSON.stringify({ kz: 'Жүлде қоры бар бағдарламалау жарыстары', ru: 'Соревнования по программированию с призовым фондом', en: 'Programming competitions with a prize fund' }),
      category: 'EVENT',
    },
    {
      slug: 'mentor-connect',
      title: JSON.stringify({ kz: 'Mentor Connect', ru: 'Mentor Connect', en: 'Mentor Connect' }),
      description: JSON.stringify({ kz: 'Senior-әзірлеушілерден және кәсіпкерлерден жеке коучинг', ru: 'Персональный коучинг от Senior-разработчиков и предпринимателей', en: 'Personal coaching from Senior developers and entrepreneurs' }),
      category: 'EDUCATION',
    },
    {
      slug: 'data-ai-workshop',
      title: JSON.stringify({ kz: 'Data & AI Workshop', ru: 'Data & AI Workshop', en: 'Data & AI Workshop' }),
      description: JSON.stringify({ kz: 'Machine Learning және деректер аналитикасы бойынша практикалық воркшоптар', ru: 'Практические воркшопы по Machine Learning и аналитике данных', en: 'Practical workshops on Machine Learning and data analytics' }),
      category: 'EDUCATION',
    },
  ];

  for (const p of programs) {
    await prisma.program.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
