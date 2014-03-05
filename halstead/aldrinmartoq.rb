oper = File.read(ARGV[0]).split
n1, N1 ,n2 ,N2 = [], [], [], []
toks = File.read(ARGV[1]).scan(/".*?"|\.|[^\(\)\,\s]+/).each do |t|
  if oper.include?(t)
    if not n1.include?(t) then n1 << t end
    N1 << t
  else
    if not n2.include?(t) then n2 << t end
    N2 << t
  end
end

l1,l2,L1,L2 = n1.length, n2.length, N1.length, N2.length
N, n, D = L1 + L2, l1 + l2, l1/2.0 * L2.to_f / l2
V = N * Math.log2(n)
E = V * D
T = E / 18
puts "
n1 = #{l1} (#{n1.join(', ')})
N1 = #{L1} (#{N1.join(', ')})
n2 = #{l2} (#{n2.join(', ')})
N2 = #{L2} (#{N2.join(', ')})

N = #{N}
n = #{n}
V = #{V}
L = #{1/D}
D = #{D}
E = #{E}
T = #{T}
"
