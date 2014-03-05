#usage: ruby siracusa.rb 5
def s n, a = []
return a << n if n == 1 && !a.empty?
s n.even? ? n / 2 : n * 3 + 1, a << n
end
puts (1..ARGV[0].to_i).map { |n| s(n).size }.each_with_index.max[-1] + 1