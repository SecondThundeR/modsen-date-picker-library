// General styles
export const CURSOR_POINTER = "pointer";
export const BOX_SIZING = "border-box";
export const NO_BORDER = "none";
export const DEFAULT_OPACITY = 0.6;
export const FULL_WIDTH = "100%";
export const FIT_WIDTH = "fit-content";
export const FULL_HEIGHT = "100%";
export const MARGIN_RESET = 0;
export const FLEXBOX_STYLE = {
  display: "flex",
  direction: {
    row: "row",
    column: "column",
  },
  alignCenter: "center",
  alignStart: "flex-start",
  justifyCenter: "center",
} as const;
export const FONT_FAMILY = '"Open Sans", sans-serif';
export const FONT_SIZE_HINT = "12px";
export const FONT_SIZE_REGULAR = "13px";
export const FONT_SIZE_TITLE = "14px";
export const FONT_WEIGHT_MAP = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
} as const;
export const FONT_STYLE = "normal";
export const LINE_HEIGHT = "normal";
export const TRANSITION_TIME = "0.2s";
export const TRANSFORM_ACTIVE_SCALE = "scale(0.98)";
export const REGULAR_GRID_STYLE = {
  display: "grid",
  columns: "repeat(7, 1fr)",
  rows: "repeat(5, 1fr)",
} as const;
export const ALTERNATIVE_GRID_STYLE = {
  display: "grid",
  columns: "repeat(3, 1fr)",
  rows: "repeat(4, 1fr)",
} as const;

// Component related styles
export const ICON_STYLE = {
  activeScale: "scale(0.95)",
  hoverScale: "scale(1.05)",
} as const;

export const BACKDROP_WRAPPER_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  blur: "blur(2px)",
  zIndex: 1000,
};

export const BUTTON_PADDING = "10px";
export const BUTTON_TEXT_COLOR = {
  disabled: "#aaa",
  selected: "#fff",
  between: "#2f80ed",
  holiday: "#b0578d",
  weekend: "#f6546a",
  regular: "#333",
} as const;
export const BUTTON_BACKGROUND_COLOR = {
  selected: {
    r: 47,
    g: 128,
    b: 237,
    opacity: {
      start: DEFAULT_OPACITY,
      between: 0.1,
      regular: 1,
    },
  },
  transparent: "transparent",
  hover: {
    selected: "#1261ca",
    regular: "#f1f1f1",
  },
} as const;
export const BUTTON_DIMENSION = {
  fixed: "32px",
  unlocked: "auto",
} as const;
export const BUTTON_BORDER_RADIUS = {
  none: 0,
  regular: "8px",
} as const;

export const HEADER_TITLE_STYLE = {
  padding: "5px 0px",
  color: "#000",
  flexLength: 2,
  align: "center",
} as const;

export const TODO_ITEM_WRAPPER = {
  gap: "8px",
  radius: "8px",
  padding: "0 8px",
  border: "1px solid #dddddd",
} as const;
export const TODO_ITEM_TITLE_DECORATION = {
  regular: "none",
  checked: "line-through",
} as const;

export const TODO_LIST_WRAPPER_CONTAINER = {
  width: "clamp(40%, 300px, 90%)",
  padding: "18px 24px",
  border: "1px solid #e1e1e1",
  radius: "16px",
  gap: "16px",
  backgroundColor: "#fff",
  margin: "auto",
} as const;
export const TODO_LIST_WRAPPER_LIST = {
  width: "100%",
  maxHeight: "200px",
  gap: "8px",
  overflowY: "auto",
} as const;
export const TODO_LIST_TITLE_SIZE = "18px";
export const TODO_LIST_INPUT_WRAPPER_GAP = "8px";
export const TODO_LIST_INPUT_STYLE = {
  flexLength: 2,
  padding: "12px 16px",
  border: "1px solid #e1e1e1",
  radius: "8px",
} as const;

export const CALENDAR_WRAPPER_STYLE = {
  padding: "10px",
  border: "1px solid #e1e1e1",
  radius: {
    regular: "8px",
    empty: "0",
    removed: "none",
  },
} as const;

export const DATE_PICKER_WRAPPER_GAP = "4px";

export const DATE_INPUT_STYLE = {
  flexLength: 2,
  placeholderColor: "#bbb",
  wrapperGap: "4px",
  title: { color: "#333", fontSize: "15px" },
  errorMessage: { color: "#ff0000", fontSize: "12px" },
  input: {
    width: "250px",
    gap: "8px",
    padding: "12px 16px",
    borderColor: {
      error: "#ff0000",
      regular: "#ddd",
    },
    radius: "8px",
    fontSize: "15px",
  },
} as const;

export const ERROR_BOUNDARY_STYLE = {
  gap: "4px",
  titleSize: "18px",
  messageColor: "gray",
} as const;

export const FOOTER_BUTTON_STYLE = {
  padding: "10px 0px",
  border: "1px solid #e1e1e1",
  radius: "0px 0px 8px 8px",
  backgroundColor: "#fff",
  textColor: "#333",
  fontSize: "12px",
} as const;

export const RANGE_PICKER_WRAPPER_GAP = "16px";
