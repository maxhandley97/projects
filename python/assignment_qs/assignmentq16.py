import operator 
# get the skills required for job and weighting of each skill
skill_assignment = {"python": 1, "ruby": 2, "bash": 4, "git": 8, "html": 16, "tdd": 32, "css": 64, "javascript": 128}
# get user input for skills known
skills = input("Out of which of the following languages, which do you know (put commas inbetween each)? Python, Ruby, Bash, Git, HTML, TDD, CSS, JavaScript): ").lower()
# seperating user input by commas into a list
applicant_skills = [s.strip() for s in skills.split(",")]
# initialising variable to create final score
final_score = 0
# initialising array to record skills not owned
applicant_could_learn = []
# iterating over required skills and their respective weighting
for skill, weighting in skill_assignment.items():
    #matching required skills to user input
    if skill in applicant_skills:
        #tallying skills
        final_score += weighting
    #create list of skills that user could improve
    else:
        applicant_could_learn.append(f"If you learnt {skill}, it would improve your score by {weighting}")

print(f"Your overall coding score is {final_score}")
print(f"You could improve your coding score by learning the following skills")
for skill_to_learn in applicant_could_learn:
    print(skill_to_learn)