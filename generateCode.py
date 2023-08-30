# Read existing folders from folderList.txt
existing_folders = set()
with open('folderList.txt', 'r') as file:
    existing_folders = set(file.read().splitlines())

# Scan folders in the same directory as the script
import os
current_folders = {folder for folder in os.listdir() if os.path.isdir(folder)}


# Compare and print missing folders
missing_folders = current_folders - existing_folders
print("This goes into JS file, line 8: \n")
# Generate JS code for missing folder and files
for folder in missing_folders:
    print(f"//folder title\n{folder}\n: [ \n//folder content")
    folder_content = os.listdir(folder)
    for file in folder_content:
        print(f"{file},")
    print("]")
    print("\n")
    # Generate HTML code for the missing folder
    print("This goes into HTML file, line 22: \n")
    print(f"<li class=\"album-tile\">")
    print(f"<img class=\"album-thumbnail\" src=\"{folder}/1.jpg\" alt=\"{folder}\">")
    print(f"<div class=\"album-title\">{folder}</div>")
    print(f"</li>\n")

# Wait for user input before exiting
input("Press Enter to proceed...")
