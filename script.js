function InitAnimaScroll() {
  const sectionScroll = document.querySelectorAll(".js-scroll");
  const metadetela = window.innerHeight * 0.6;

  if (sectionScroll.length) {
    function animaScroll() {
      sectionScroll.forEach((e) => {
        const sectiontop = e.getBoundingClientRect().top;
        const sectionaparece = sectiontop - metadetela < 0;
        if (sectionaparece) {
          e.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}

InitAnimaScroll();