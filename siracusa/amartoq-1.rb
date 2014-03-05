#!/usr/bin/env ruby
# Ver http://www.programando.org/blog/2012/04/desafio-2012-04-el-problema-de-siracusa/
#
# por @aldrinmartoq

$c = [0,3,1]
def s(i)
  return $c[i] if $c[i]
  s(i.even? ? i/2 : i*3+1) + 1
end
puts (1..ARGV[0].to_i).map { |i| s(i) }.each_with_index.max[1] + 1