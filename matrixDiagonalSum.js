// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

let mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]

              let sum=0;
              for(let i=0;i<mat.length;i++){
                  for(let j=0;j<mat.length;j++){
                      if(i==j || i+j== mat.length-1 ){
                          sum+=mat[i][j];
                      }
                  }
              }
              return(sum)