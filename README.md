Project
- name (string)
- description (string)
- in future: owner
- in future: users

Task
- name (string)
- description (string)
- status (string enum)
- project (Project)
- in future: users

User
- username (alphanumeric string)
- password (hash)
- user type (User Type)

User Type
- type (string)
- read (boolean)
- write (boolean)