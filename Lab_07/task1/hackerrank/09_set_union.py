def main():
    n = int(input())
    eng = set(map(int, input().split()))
    m = int(input())
    fr = set(map(int, input().split()))
    print(len(eng | fr))


if __name__ == "__main__":
    main()
