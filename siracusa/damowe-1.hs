module Main (main) where

import System.Environment

siracusa :: Int -> [Int] -> IO ()
siracusa 1 xs = putStrLn $ show (xs ++ [1])
siracusa n xs = if even n
then siracusa (n `div` 2) $ xs ++ [n]
else siracusa (n * 3 + 1) $ xs ++ [n]

main :: IO ()
main = do [x] <- getArgs
siracusa (read x) []