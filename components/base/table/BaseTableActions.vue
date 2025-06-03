<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <div
          class="inline-flex items-center justify-center size-6 text-muted-foreground hover:bg-gray-300/20 transition-colors rounded-xl"
          role="img"
          aria-label="Additional information available"
        >
          <BaseIcon
            name="info"
            class="text-xs"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>See more information</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
