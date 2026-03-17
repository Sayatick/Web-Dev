def first_last6(nums: list[int]) -> bool:
    return nums[0] == 6 or nums[-1] == 6


def same_first_last(nums: list[int]) -> bool:
    return len(nums) >= 1 and nums[0] == nums[-1]


def make_pi() -> list[int]:
    return [3, 1, 4]


def common_end(a: list[int], b: list[int]) -> bool:
    return a[0] == b[0] or a[-1] == b[-1]


def sum3(nums: list[int]) -> int:
    return sum(nums)


def rotate_left3(nums: list[int]) -> list[int]:
    return nums[1:] + nums[:1]


def reverse3(nums: list[int]) -> list[int]:
    return nums[::-1]


def max_end3(nums: list[int]) -> list[int]:
    max_val = max(nums[0], nums[-1])
    return [max_val, max_val, max_val]


def sum2(nums: list[int]) -> int:
    return sum(nums[:2])


def middle_way(a: list[int], b: list[int]) -> list[int]:
    return [a[1], b[1]]


def make_ends(nums: list[int]) -> list[int]:
    return [nums[0], nums[-1]]


def has23(nums: list[int]) -> bool:
    return 2 in nums or 3 in nums
