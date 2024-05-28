class Toybox {
  constructor(
    // Defines parameters:
    name,
    color,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
}

export default Toybox;
