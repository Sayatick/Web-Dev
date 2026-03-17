def count_evens(nums: list[int]) -> int:
    return sum(1 for n in nums if n % 2 == 0)


def big_diff(nums: list[int]) -> int:
    return max(nums) - min(nums)


def centered_average(nums: list[int]) -> int:
    nums_sorted = sorted(nums)
    return sum(nums_sorted[1:-1]) // (len(nums) - 2)


def sum13(nums: list[int]) -> int:
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
            continue
        total += nums[i]
        i += 1
    return total


def sum67(nums: list[int]) -> int:
    total = 0
    ignore = False
    for n in nums:
        if n == 6:
            ignore = True
        elif ignore and n == 7:
            ignore = False
        elif not ignore:
            total += n
    return total


def has22(nums: list[int]) -> bool:
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False
