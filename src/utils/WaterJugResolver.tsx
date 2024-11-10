type Step = {
    jugX: number;
    jugY: number;
    action: string;
  };
  
  export function solveWaterJug(x: number, y: number, z: number): Step[] | null {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    if (z % gcd(x, y) !== 0 || z > Math.max(x, y)) return null;
  
    let jugX = 0;
    let jugY = 0;
    const steps: Step[] = [];
  
    while (jugX !== z && jugY !== z) {
      if (jugX === 0) {
        jugX = x;
        steps.push({ jugX, jugY, action: "Fill Jug X" });
      } else if (jugY === y) {
        jugY = 0;
        steps.push({ jugX, jugY, action: "Empty Jug Y" });
      } else {
        const transfer = Math.min(jugX, y - jugY);
        jugX -= transfer;
        jugY += transfer;
        steps.push({ jugX, jugY, action: "Transfer Jug X to Jug Y" });
      }
    }
  
    return steps;
  }