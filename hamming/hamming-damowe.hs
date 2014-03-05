

module Main (main) where


import System.Environment
import qualified Data.Set as S
import Text.Printf
import System.Exit


hmFold :: Integer -> S.Set Integer -> Integer -> S.Set Integer
hmFold m r t = S.insert (m * t) r


hamming :: Integer -> Integer -> Integer -> [Integer]
hamming n m o = let builder b = v : builder (foldl (hmFold v) w [n, m, o])
                      where (v, w) = S.deleteFindMin b
                in builder $ S.fromList [1]


hammingAt :: Integer -> Integer -> Integer -> Int -> Integer
hammingAt x y z n = hamming x y z !! n


procArgs :: IO ()
procArgs = do
  [x, y, z, n] <- getArgs
  print $ hammingAt
    (read x :: Integer)
    (read y :: Integer)
    (read z :: Integer)
    (read n :: Int)


handlerIOError :: IOError -> IO ()
handlerIOError e = putStrLn (printf "IOError: %s" $ show e)
                   >> exitFailure


main :: IO ()
main = procArgs `catch` handlerIOError

