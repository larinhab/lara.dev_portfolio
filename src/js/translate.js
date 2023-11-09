export const translate = document.getElementById("translate-text");
export const btnTranslate = document.getElementById("btn-english");
      
export function toggleTranslate() {
    btnTranslate.addEventListener("click", () => {
        document.getElementById('translate-text').style.display = "flex"

        if (btnTranslate.textContent === "About me EN") {
            translate.textContent = "Hello, my name is Lara, I am a dental surgeon specializing in Implantology, I have been working in the area for 4 years. But my passion has always been programming: creating websites and, in the future, software and systems. Unfortunately, I didn't have the opportunity to enter the area due to the limitations of my parents' mentality, who at the time did not believe that this segment would have a future. Today, with financial independence and emotional maturity, I am studying and managing both careers. Little by little I intend to dedicate myself solely to programming, so I am looking for an internship/job in the area while I continue studying to make my dream come true. Currently I am focused more on FRONT-END, I am comfortable with HTML and CSS, I have knowledge of the JAVASCRIPT and REACT JS and TYPESCRIPT languages. In the future I intend to increase my knowledge by also adding the BACK-END part with NodeJs, PHP and MySQL and also expanding my framework with VueJs and BootStrap. I have worked in several dental clinics and with that, I gained experience, not only in dental techniques, but mainly in softskills. I have great ease in communicating with people, sensitivity in argumentation, group activities and people management. I am a responsible person who respects deadlines and schedules, with an extreme desire to learn.";
            btnTranslate.textContent = "Sobre mim";
        } else {
            translate.textContent = " Olá, meu nome é Lara, sou cirurgiã-dentista com especialização em Implantodontia, já trabalho há 4 anos na área. Mas minha paixão sempre foi programação: criação de websites e futuramente softwares e sistemas. Infelizmente não tive a oportunidade de entrar na área por limitações de mentalidade dos meus pais que na época não acreditavam que este segmento teria futuro. Hoje já com independência financeira e maturidade emocional, estou estudando e administrando as duas carreiras. Aos poucos pretendo me dedicar somente a programação, para isso estou em busca de um estágio/emprego na área enquanto sigo estudando para concretizar meu sonho. Atualmente estou focada mais no FRONT-END, tenho facilidade com HTML e CSS, tenho conhecimento das linguagens JAVASCRIPT e REACT JS e TYPESCRIPT. No futuro pretendo aumentar meu conhecimento agregando também a parte de BACK-END com NodeJs, PHP e MySQL e também ampliar meu framework com VueJs e BootStrap. Já trabalhei em diversas clinícas odontológicas e com isso, ganhei experiência, não só em técnicas odontológicas, mas principalmente em softskills tenho grande facilidade de comunicação com pessoas, sensibilidade de argumentação, atividades em grupo e gestão de pessoas. Sou uma pessoa responsável que respeita prazos e horários, com uma extrema vontade de aprender.";
            btnTranslate.textContent = "About me";
        }
        return
    });
} 

toggleTranslate()


