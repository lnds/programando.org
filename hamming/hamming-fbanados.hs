{-
Para compilar:
-Descargar la haskell platform desde http://hackage.haskell.org/platform/
-ghc hamming.hs
-./hamming 7 13 19 100
-}

module Main (main) where
import System (getArgs)

-- Merge de listas infinitas
merge :: (Ord a) => [a] -> [a] -> [a]
merge (x:xs)(y:ys)
  | x == y    = x : merge xs ys
  | x <  y    = x : merge xs (y:ys)
  | otherwise = y : merge (x:xs) ys

-- secuencia de hamming lazy
hamming::Int -> Int -> Int ->[Int]
hamming a b c
  = 1 : merge (map (a*) (hamming a b c)) 
              (merge (map (b*) (hamming a b c)) 
                     (map (c*) (hamming a b c)))

main = do
     args <- getArgs
     putStr $ show ((hamming (read (args !! 0)) 
                             (read (args !! 1)) 
                             (read (args !! 2))) !! (read (args !! 3)))
