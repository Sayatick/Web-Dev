def mutate_string(string: str, position: int, character: str) -> str:
    return string[:position] + character + string[position + 1 :]


def main():
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)


if __name__ == "__main__":
    main()
