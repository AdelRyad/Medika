import { createContext, useState, Dispatch, SetStateAction } from "react";

export const CheckAllContext = createContext<{
  checkAll: boolean;
  setCheckAll: (value: boolean) => void;
}>({
  checkAll: false,
  setCheckAll: () => {},
});

export const CheckAllProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [checkAll, setCheckAll]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  return (
    <CheckAllContext.Provider value={{ checkAll, setCheckAll }}>
      {children}
    </CheckAllContext.Provider>
  );
};
