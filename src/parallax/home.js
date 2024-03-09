import $ from "jquery";

export default function HomeParallax() {
  $(document).ready(() => {
    $(".container-contain-home").css({ transform: "translateY(0%)" });
  });

  // scroll
  $(document).scroll(() => {
    const scrollValue = $(document).scrollTop();
    const tinggiDokumen = $(document).height();
    const tinggiJendela = $(window).height();
    const persScroll = (scrollValue / (tinggiDokumen - tinggiJendela)) * 100;

    console.log(persScroll);
    $(".container-contain-home").css({ transition: "none" });

    $(".f-contain-home").css({
      transform: `translateY(${persScroll}%)`,
    });
    $(".f-contain-home").css({ border: `3px solid black` });
  });
}
