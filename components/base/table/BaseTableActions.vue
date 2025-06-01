<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Button
          variant="ghost"
          class="size-6 p-0 cursor-pointer"
        >
          <BaseIcon
            name="info"
            class="text-xs text-muted-foreground"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>See more information</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
