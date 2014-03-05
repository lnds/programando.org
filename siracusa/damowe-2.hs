module Main (main) where

import System.Environment
import Data.List
import Data.Ord
import Data.Function

collatz :: Int -> [Int] -> [Int]
collatz n xs | n == 1 = xs ++ [1]
collatz n xs | even n = collatz (n `div` 2) $ xs ++ [n]
collatz n xs | otherwise = collatz (n * 3 + 1) $ xs ++ [n]

main :: IO ()
main = do [x] <- getArgs
          print $ fst $ maximumBy (comparing length `on` snd)
            $ fmap (\ x -> (x, collatz x []) ) [1..(read x)]