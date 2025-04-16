class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.5
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

var nomeVinho = prompt("Digite o nome do vinho:");
console.log("Nome do vinho: " + nomeVinho);
alert("Nome cadastrado com sucesso! Veja os detalhes no console");
var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
console.log("Tipo do vinho: " + tipoVinho);
alert("Tipo do vinho cadastrado com sucesso! Veja os detalhes no console");
var safraVinho = prompt("Digite o ano da safra do vinho:");
console.log("Ano da Safra: " + safraVinho);
alert("Ano da Safra do vinho cadastrado com sucesso! Veja os detalhes no console");
var quantidadeEstoque = prompt("Digite a quantidade em estoque do vinho:");
console.log("Quantidade em estoque: " + quantidadeEstoque);
alert("Quantidade em estoque cadastrada com sucesso! Veja os detalhes no console.");


