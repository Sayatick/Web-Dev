def problem_a():
    n = int(input())
    print(sum(range(1, n + 1)))


def problem_b():
    n = int(input())
    result = 1
    for i in range(1, n + 1):
        result *= i
    print(result)


def problem_c():
    n = int(input())
    print(sum(i * i for i in range(1, n + 1)))


def problem_d():
    a, b, k = map(int, input().split())
    count = sum(1 for i in range(a, b + 1) if i % k == 0)
    print(count)


def problem_e():
    a = int(input())
    b = int(input())
    for i in range(a, b + 1):
        print(i)


def problem_f():
    a = int(input())
    b = int(input())
    print(sum(i for i in range(a, b + 1) if i % 2 == 0))


def problem_g():
    n = int(input())
    count = sum(1 for i in range(1, n + 1) if n % i == 0)
    print(count)


def problem_h():
    n = int(input())
    if n < 2:
        print("NO")
        return
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            print("NO")
            return
    print("YES")


def problem_i():
    n = int(input())
    result = 0
    while n > 0:
        result = result * 10 + n % 10
        n //= 10
    print(result)


def problem_j():
    n = int(input())
    digits = [int(d) for d in str(abs(n))]
    print(min(digits))


def problem_k():
    n = int(input())
    digits = [int(d) for d in str(abs(n))]
    print(max(digits))


def problem_l():
    n = int(input())
    print(sum(int(d) for d in str(abs(n))))


def problem_m():
    n = int(input())
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")


if __name__ == "__main__":
    problem_a()
