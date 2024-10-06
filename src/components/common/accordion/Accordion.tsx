import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import classNames from "classnames";
import { ThickChevronRightIcon } from "@radix-ui/themes";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  isActiveTrigger?: boolean;
}

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      "mt-4 overflow-hidden first:mt-0 first:rounded-t rounded-md last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, isActiveTrigger = true, ...props }, forwardedRef) => (
  <Accordion.Header
    className={classNames(
      "group flex h-[45px] flex-1 gap-3 cursor-pointer items-center justify-between bg-white px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
      className
    )}
  >
    {isActiveTrigger && (
      <Accordion.Trigger {...props} ref={forwardedRef}>
        <ThickChevronRightIcon
          className='text-violet10 w-10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=closed]:rotate group-data-[state=open]:rotate-90'
          aria-hidden
          width={15}
          height={15}
        />
      </Accordion.Trigger>
    )}

    {children}
  </Accordion.Header>
));

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className='px-5 py-[15px]'>{children}</div>
  </Accordion.Content>
));
