def problem_a():
    n = int(input())
    arr = list(map(int, input().split()))
    print(sum(arr))


def problem_b():
    n = int(input())
    arr = list(map(int, input().split()))
    max_val = max(arr)
    idx = arr.index(max_val)
    print(max_val, idx)


def problem_c():
    n = int(input())
    arr = list(map(int, input().split()))
    min_val = min(arr)
    idx = arr.index(min_val)
    print(min_val, idx)


def problem_d():
    n = int(input())
    arr = list(map(int, input().split()))
    print(sum(1 for x in arr if x > 0))


def problem_e():
    n = int(input())
    arr = list(map(int, input().split()))
    print(" ".join(map(str, reversed(arr))))


def problem_f():
    n = int(input())
    arr = list(map(int, input().split()))
    shifted = arr[1:] + [arr[0]]
    print(" ".join(map(str, shifted)))


def problem_g():
    n = int(input())
    arr = list(map(int, input().split()))
    shifted = [arr[-1]] + arr[:-1]
    print(" ".join(map(str, shifted)))


if __name__ == "__main__":
    problem_a()
