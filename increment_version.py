import sys


def increment_version(version, increment):
    # Parse version string
    try:
        major, minor, patch = version.split(".")
    except ValueError:
        print(f"Invalid version format: {version}")
        sys.exit(1)

    # Validate increment parameter
    if increment not in ["major", "minor"]:
        print(f"Invalid increment parameter: {increment}")
        sys.exit(1)
    major, minor, patch = version.split(".")

    # Increment the specified version component
    if increment == "major":
        major = str(int(major) + 1)
        minor = "0"
        patch = "0"
    elif increment == "minor":
        minor = str(int(minor) + 1)
        patch = "0"

    # Return the updated version number
    return f"{major}.{minor}.{patch}"


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python increment_version.py <current_version> <increment_type>")
        sys.exit(1)

# Read the current version from a file or any other source
current_version = sys.argv[1]

# Get the desired version increment from the command line argument
increment_type = sys.argv[2]

# Increment the version based on the specified type
updated_version = increment_version(current_version, increment_type)

# Update the version file or any other desired output
print(f"Updated version: {updated_version}")
