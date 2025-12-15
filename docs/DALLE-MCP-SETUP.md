# DALL-E MCP Server Setup for Kilo Code

This document describes how to use the DALL-E MCP server for AI image generation in Kilo Code.

## Overview

The DALL-E MCP server allows you to generate, edit, and create variations of images using OpenAI's DALL-E API directly from Kilo Code.

## Installation Location

The MCP server is installed at:

```
~/.local/share/mcp-servers/dalle-mcp/
```

## Configuration

The MCP server is configured in Kilo Code's settings at:

```
~/.vscode-server/data/User/globalStorage/kilocode.kilo-code/settings/mcp_settings.json
```

### Current Configuration

```json
{
  "mcpServers": {
    "dalle-mcp": {
      "command": "node",
      "args": ["/home/tarik/.local/share/mcp-servers/dalle-mcp/build/index.js"],
      "env": {
        "OPENAI_API_KEY": "${OPENAI_API_KEY}",
        "SAVE_DIR": "/home/tarik/repo/n3tz-astro/src/assets/images"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

## Required Setup

### 1. Set OpenAI API Key

You need to set the `OPENAI_API_KEY` environment variable. Add this to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.):

```bash
export OPENAI_API_KEY="your-openai-api-key-here"
```

Then reload your shell or run:

```bash
source ~/.bashrc  # or ~/.zshrc
```

### 2. Restart VS Code / Kilo Code

After setting the environment variable, restart VS Code to ensure Kilo Code picks up the new MCP server configuration.

## Available Tools

### 1. `generate_image`

Generate images using DALL-E.

**Parameters:**

- `prompt` (required): Text description of the desired image
- `model` (optional): "dall-e-2" or "dall-e-3" (default: "dall-e-3")
- `size` (optional): Size of the generated image
  - DALL-E 3: "1024x1024", "1792x1024", or "1024x1792"
  - DALL-E 2: "256x256", "512x512", or "1024x1024"
- `quality` (optional): "standard" or "hd" (DALL-E 3 only, default: "standard")
- `style` (optional): "vivid" or "natural" (DALL-E 3 only, default: "vivid")
- `n` (optional): Number of images to generate (1-10, default: 1)
- `saveDir` (optional): Directory to save images (default: configured SAVE_DIR)
- `fileName` (optional): Base filename (default: "dalle-{timestamp}")

**Example:**

```json
{
  "prompt": "A futuristic city skyline with flying cars and neon lights",
  "model": "dall-e-3",
  "size": "1024x1024",
  "quality": "standard",
  "style": "vivid"
}
```

### 2. `edit_image`

Edit an existing image using DALL-E based on a text prompt.

**Parameters:**

- `prompt` (required): Text description of the desired edits
- `imagePath` (required): Path to the image to edit
- `mask` (optional): Path to mask image (white areas edited, black preserved)
- `model` (optional): Currently only "dall-e-2" supports editing
- `size` (optional): Size of the generated image (default: "1024x1024")
- `n` (optional): Number of images to generate (1-10, default: 1)
- `saveDir` (optional): Directory to save images
- `fileName` (optional): Base filename (default: "dalle-edit-{timestamp}")

**Example:**

```json
{
  "prompt": "Add a red hat",
  "imagePath": "/path/to/image.png",
  "mask": "/path/to/mask.png",
  "model": "dall-e-2",
  "size": "1024x1024"
}
```

### 3. `create_variation`

Create variations of an existing image using DALL-E.

**Parameters:**

- `imagePath` (required): Path to the image to create variations of
- `model` (optional): Currently only "dall-e-2" supports variations
- `size` (optional): Size of the generated image (default: "1024x1024")
- `n` (optional): Number of variations to generate (1-10, default: 1)
- `saveDir` (optional): Directory to save images
- `fileName` (optional): Base filename

### 4. `validate_key`

Validate the OpenAI API key.

## Usage Tips for Blog Thumbnails

For generating blog post thumbnails for n3tz.io:

1. **Recommended size**: Use "1792x1024" for landscape blog thumbnails
2. **Style**: Use "vivid" for eye-catching thumbnails
3. **Quality**: Use "hd" for better quality images

**Example prompt for a tech blog thumbnail:**

```json
{
  "prompt": "Modern abstract digital art representing web development, featuring code elements, responsive design mockups, and gradient colors in pink and orange tones, professional and clean aesthetic",
  "model": "dall-e-3",
  "size": "1792x1024",
  "quality": "hd",
  "style": "vivid",
  "saveDir": "/home/tarik/repo/n3tz-astro/src/assets/images",
  "fileName": "blog-thumbnail-web-dev"
}
```

## Troubleshooting

### Server not appearing in Kilo Code

1. Ensure the OPENAI_API_KEY environment variable is set
2. Restart VS Code completely
3. Check the MCP settings file exists and is valid JSON

### Images not saving

1. Verify the SAVE_DIR path exists and is writable
2. Check file permissions on the target directory

### API errors

1. Verify your OpenAI API key is valid
2. Check your OpenAI account has sufficient credits
3. Ensure you're not exceeding rate limits

## Source Repository

The DALL-E MCP server is from: https://github.com/Garoth/dalle-mcp

## License

MIT License
