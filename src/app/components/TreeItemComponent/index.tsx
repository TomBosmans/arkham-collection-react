import { TreeItemContentProps, useTreeItem } from "@mui/lab"
import { Typography } from "@mui/material"
import clsx from "clsx"
import { forwardRef } from "react"

// limiting expansion to clicking the icon
export const TreeItemComponent = forwardRef(function CustomContent(
  props: TreeItemContentProps,
  ref
) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon
  } = props

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection
  } = useTreeItem(nodeId)

  const icon = iconProp || expansionIcon || displayIcon

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    preventSelection(event)
  }

  const handleExpansionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleExpansion(event)
  }

  const handleSelectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    handleSelection(event)
  }

  return (
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled
      })}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
    </div>
  )
})
