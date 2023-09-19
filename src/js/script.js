
const sobreMim = document.getElementById("texto-sobre");
const btnEnglish = document.getElementById("btn-english");
      
 btnEnglish.addEventListener("click", () => {
    if (btnEnglish.textContent === "Inglês US") {
        sobreMim.textContent = "Hi, my name is Lara, I have a degree in Dentistry with a specialization in Implantology, and I've been working in the field for 4 years. While dentistry is my current profession, my real passion has always been programming: creating systems and websites. Unfortunately, when I was younger, my parents didn't believe that the tech industry had a promising future. Now, with financial independence n emotional maturity, I'm finally able to pursue my passion. I'm studying and managing both dentistry and programming, but my long-term goal is to focus solely on programming. To achieve that, I'm actively looking for an internship or job in the programming field while continuing to study. Currently, I'm focused on FRONT-END development and I'm quite comfortable with HTML and CSS. I also have knowledge of JavaScript, React.js, and TypeScript. In the future, I plan to expand my expertise to include BACK-END development using NodeJs, PHP, SQL, C#, C+, as well as broadening my framework knowledge. In my previous experience working in various dental clinics, I not only gained technical expertise in dentistry but also developed essential soft skills. I'm a great communicator and can easily connect with people, and I have strong skills in argumentation, teamwork, and people management. I take responsibility seriously and always meet deadlines n schedules. My main goal is to secure a job in the programming field i got a lot of willing to learn.";
        btnEnglish.textContent = "Português";
    } else {
        sobreMim.textContent = " Olá, meu nome é Lara, sou cirurgiã-dentista com especialização em Implantodontia, já trabalho há 4 anos na área. Mas minha paixão sempre foi programação: criação de websites e futuramente softwares e sistemas. Infelizmente não tive a oportunidade de entrar na área por limitações de mentalidade dos meus pais que na época não acreditavam que este segmento teria futuro. Hoje já com independência financeira e maturidade emocional, estou estudando e administrando as duas carreiras. Aos poucos pretendo me dedicar somente a programação, para isso estou em busca de um estágio/emprego na área enquanto sigo estudando para concretizar meu sonho. Atualmente estou focada mais no FRONT-END, tenho facilidade com HTML e CSS, tenho conhecimento das linguagens JAVASCRIPT e REACT JS e TYPESCRIPT. No futuro pretendo aumentar meu conhecimento agregando também a parte de BACK-END com NodeJs, PHP, SQL, C#, C+ e também ampliar meu framework. Já trabalhei em diversas clinicas odontológicas e com isso, ganhei experiência, não só em técnicas odontológicas, mas principalmente em softskills tenho grande facilidade de comunicação com pessoas, sensibilidade de argumentação, atividades em grupo e gestão de pessoas. Sou uma pessoa responsável que respeita prazos e horários, tenho uma extrema vontade de aprender.";
        btnEnglish.textContent = "Inglês US";
    }
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".sobre", {duration: 2000});

sr.reveal(".projetos", {duration: 2000});

sr.reveal(".habilidades", {duration: 2000});

sr.reveal(".contato", {duration: 2000});
