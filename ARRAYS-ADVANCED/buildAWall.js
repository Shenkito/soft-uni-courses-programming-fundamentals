function buildWall(wall) {
    const CONCRETE_PER_FOOT = 195; // 1 foot = 195 cubic yards
    const COST_PER_CUBIC_YARD = 1900;
    const UNFINISHED_HEIGHT = 30;
  
    const days = [];
    let totalConcrete = 0;
  
    while (wall.some(height => height < UNFINISHED_HEIGHT)) {
      let concreteUsed = 0;
  
      for (let i = 0; i < wall.length; i++) {
        if (wall[i] < UNFINISHED_HEIGHT) {
          wall[i]++;
          concreteUsed += CONCRETE_PER_FOOT;
        }
      }
  
      days.push(concreteUsed);
      totalConcrete += concreteUsed;
    }
  
    const totalCubicYards = totalConcrete / 27;
    const totalCost = Math.round(totalCubicYards * COST_PER_CUBIC_YARD);
  
    console.log(days.map(concrete => Math.round(concrete)).join(', '));
    console.log(new Intl.NumberFormat().format(totalCost) + 'pesos');
  }
  
  buildWall([21, 25, 28]);