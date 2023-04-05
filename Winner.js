function Winner(competitions, results) {
    const scores = {}; 
    let currentMaxScore = 0; 
    let currentWinner = ''; 
    
    for (let i = 0; i < competitions.length; i++) {
      const [homeTeam, awayTeam] = competitions[i]; 
      const winner = results[i] === 1 ? homeTeam : awayTeam; 
      scores[winner] = (scores[winner] || 0) + 3; 
      
      if (scores[winner] > currentMaxScore) {
        currentMaxScore = scores[winner];
        currentWinner = winner; 
      }
    }
    
    return currentWinner; 
}
  console.log(Winner([ ["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"] ], [ 0, 0, 1]  ))