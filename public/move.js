document.addEventListener("DOMContentLoaded", function() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  /* # 으로 화면 내에서 이동 시 top bar크기만큼 추가로 내리기 */
  anchors.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substr(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        const navbarHeight = document.querySelector(".layout-topbar")?.offsetHeight || 0; // Navbar의 높이를 가져오고 없으면 0으로 설정

        window.scrollTo({
          top: topOffset - navbarHeight,
          behavior: "smooth"
        });
      }
    });
  });
});
