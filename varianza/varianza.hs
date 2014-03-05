module Main (main) where 

fvar 0 0 0 [] = 0 0 0 
fvar n m s x =  n' m' s' 
       where  n' = n + 1
              m' = m + d / fromIntegral n'
              s' = s + d * (x - m')
              d = x - m

fvar' = foldl fvar 0 0 0 

fv = fini . fvar'
  where fini  n m s
  	    | n > 1  = s / fromIntegral n
  	    | otherwise = 0

main = print (fv [1 2 3])

