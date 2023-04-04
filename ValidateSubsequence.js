function ValidSubsequence(array, sequence) {
    let arrIdx=0;
    let seqIdx=0;
    while (arrIdx<array.length && seqIdx<sequence.length){
      if(array[arrIdx]==sequence[seqIdx]) seqIdx++;
      arrIdx++
    } 
    return seqIdx===sequence.length;
}
console.log( ValidSubsequence( [ 5, 1, 22, 25, 6, -1, 8, 10 ],[1,6,-1,10] ) )
  