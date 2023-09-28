import { PropsWithChildren } from "react";

export interface BackdropProps extends PropsWithChildren {
  closeModal: () => void;
}
