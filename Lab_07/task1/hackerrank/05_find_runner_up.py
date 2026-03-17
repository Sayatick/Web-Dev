def main():
    n = int(input())
    arr = list(map(int, input().split()))
    unique_sorted = sorted(set(arr), reverse=True)
    print(unique_sorted[1])


if __name__ == "__main__":
    main()
