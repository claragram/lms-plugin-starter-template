import { createConfigSchematics } from "@lmstudio/sdk";

// This file contains the definition of configuration schematics for your plugin.

/**
 * This is the schematics of the per-chat configuration for your plugin. Configurations of this
 * type will be saved with each chat and can be different for each chat.
 */
export const configSchematics = createConfigSchematics()
  .field(
    "myCustomField", // The key of the field.
    "numeric", // Type of the field.
    // Options for the field. Different field types will have different options.
    {
      displayName: "My Custom Field",
      hint: "This is my custom field. Doesn't do anything special.",
      slider: { min: 0, max: 100, step: 1 }, // Add a slider to the field.
    },
    80, // Default Value
  )
  // You can add more fields by chaining the field method.
  // For example:
  //   .field("anotherField", ...)
  .build();

/**
 * This is the schematics of the application-wide configuration for your plugin. Configurations of
 * this type will be saved globally and will be the same for all chats. This is useful for things
 * like global settings or API keys that should be consistent across all chats.
 */
export const globalConfigSchematics = createConfigSchematics()
  .field(
    "myGlobalCustomField", // The key of the field.
    "string",
    {
      displayName: "My Global Custom Field",
      hint: "This is my global custom field. Doesn't do anything special.",
    },
    "default value", // Default Value
  )
  // You can add more fields by chaining the field method.
  // For example:
  //  .field("anotherGlobalField", ...)
  .build();
