import { rgba } from "polished";

import { CalendarButtonStyleProps } from "@/components/CalendarButton/interfaces";
import {
  BUTTON_BACKGROUND_COLOR,
  BUTTON_BORDER_RADIUS,
  BUTTON_DIMENSION,
  BUTTON_TEXT_COLOR,
  CALENDAR_WRAPPER_STYLE,
  DATE_INPUT_STYLE,
  TODO_ITEM_TITLE_DECORATION,
} from "@/constants/style";

export const getButtonBackgroundColor = ({
  $isSelected,
  $range,
}: CalendarButtonStyleProps) => {
  const { transparent, selected } = BUTTON_BACKGROUND_COLOR;
  if ($isSelected || $range !== undefined) {
    const {
      r,
      g,
      b,
      opacity: { start, between, regular },
    } = selected;
    return rgba(
      r,
      g,
      b,
      $range === "start" ? start : $range === "between" ? between : regular,
    );
  }
  return transparent;
};

export const getButtonHoverBackgroundColor = (isSelected: boolean = false) =>
  BUTTON_BACKGROUND_COLOR.hover[isSelected ? "selected" : "regular"];

export const getButtonSize = (isUnlocked = false) =>
  BUTTON_DIMENSION[isUnlocked ? "unlocked" : "fixed"];

export const getButtonRadius = (isNotRounded: boolean) =>
  BUTTON_BORDER_RADIUS[isNotRounded ? "none" : "regular"];

export const getButtonTextColor = ({
  $isSelected,
  $range,
  $isDisabled,
  $isWeekend,
  $isHoliday,
}: CalendarButtonStyleProps) => {
  if ($isSelected || $range === "start" || $range === "end")
    return BUTTON_TEXT_COLOR.selected;
  if ($range === "between") return BUTTON_TEXT_COLOR.between;
  if ($isHoliday) return BUTTON_TEXT_COLOR.holiday;
  if ($isWeekend) return BUTTON_TEXT_COLOR.weekend;
  if ($isDisabled) return BUTTON_TEXT_COLOR.disabled;
  return BUTTON_TEXT_COLOR.regular;
};

export const getTodoItemTitleDecoration = (isChecked = false) =>
  TODO_ITEM_TITLE_DECORATION[isChecked ? "checked" : "regular"];

export const getCalendarWrapperRadius = (
  removeBottomBorder = false,
  isBorderBottom = false,
) => {
  const { radius } = CALENDAR_WRAPPER_STYLE;
  if (isBorderBottom) return radius.removed;
  return radius[removeBottomBorder ? "empty" : "regular"];
};

export const getDateInputBorderColor = (isError = false) =>
  DATE_INPUT_STYLE.input.borderColor[isError ? "error" : "regular"];
