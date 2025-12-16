import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Code, FileText, TestTube, Lightbulb } from "lucide-react";
import { RocketModel3D } from "@/components/RocketModel3D";
import { GLTFViewer } from "@/components/GLTFViewer";
import { getProjectById } from "@/data/projects";
import type { AnyProject, ProjectType, TeamProject } from "@/data/projects";
import SkillBadge from "@/components/SkillBadge";
import { cn } from "@/lib/utils";

const isTeamProject = (project: AnyProject): project is TeamProject => project.type === "team";

const DetailList = ({ items, accentClass }: { items: string[]; accentClass: string }) => (
  <ul className="space-y-3" role="list">
    {items.map((item, index) => (
      <li
        key={index}
        className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r from-gray-800/80 via-gray-800/60 to-gray-900/80 px-3 py-3 sm:px-4 sm:py-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        ></div>
        <div className="flex items-start gap-3">
          <span
            className={cn(
              "mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[11px] font-semibold uppercase tracking-tight",
              accentClass
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-gray-200 leading-relaxed">{item}</p>
        </div>
      </li>
    ))}
  </ul>
);

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Project Detail Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-gray-400">Failed to load project details</p>
            <Button onClick={() => window.location.href = '/'} variant="outline">
              Return Home
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const ProjectDetail = () => {
  const { type, id } = useParams<{ type: ProjectType; id: string }>();
  const navigate = useNavigate();
  const numericId = Number(id);
  const projectType = type;
  const project = projectType && Number.isInteger(numericId)
    ? getProjectById(projectType, numericId)
    : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const projectTitle = project.type === "personal" ? project.name : project.projectName;
  const projectImage = project.image;
  const detail = project.detail;
  const teamProject = isTeamProject(project) ? project : null;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-16">
        {/* Header */}
        <div className="relative">
          <div className="h-64 sm:h-80 md:h-96 overflow-hidden">
            <img 
              src={projectImage} 
              alt={projectTitle}
              className="w-full h-full object-contain sm:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
          </div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-4 py-6">
              <div className="mb-4">
                <Button 
                  onClick={() => navigate(project.type === 'personal' ? '/personal-projects' : '/team-projects')}
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {project.type === 'personal' ? 'Personal' : 'Team'} Projects
                </Button>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{projectTitle}</h1>
              
              {teamProject && (
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-blue-900 text-blue-200">
                    {teamProject.teamName}
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-900 text-purple-200">
                    {teamProject.teamSize} team members
                  </Badge>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} size="sm" tone="blue" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* 3D Model - Only for USST Rocket Project - Full Width at Top */}
          {teamProject && teamProject.projectName === "USST Rocket Project: Up ↑" && (
            <Card className="bg-gray-800 border-gray-700 mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <div className="h-5 w-5 text-orange-400">🚀</div>
                    3D Rocket Model
                  </CardTitle>
                  <Button 
                    asChild
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <a 
                      href="https://cad.onshape.com/documents/43f54792d901009a1d5350b5/w/1a8062a66f6bea486a8ed6a0/e/ed78210f0cd5f2108596a0ca" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                      title="Open USST Rocket Project in Onshape"
                    >
                      <span>Open in Onshape</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Interactive 3D model of the rocket assembly with enhanced lighting and materials. Auto-rotates for optimal viewing - hover to pause, drag to rotate, scroll to zoom.</p>
                <div className="relative">
                  <React.Suspense fallback={
                    <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
                      </div>
                    </div>
                  }>
                                          {/* Only show for USST Rocket Project: Up (team id: 1) */}
                      {teamProject && project.id === 1 ? (
                        <GLTFViewer modelPath="/ROCKETAssembly_July8.gltf" backgroundColor="#1a1a2e" />
                      ) : (
                        <RocketModel3D modelPath="/ROCKETAssembly_July8.gltf" scale={0.1} />
                      )}
                  </React.Suspense>
                </div>
              </CardContent>
            </Card>
          )}



          <div className="grid lg:grid-cols-2 gap-8">
            {/* Purpose/Motivation */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-blue-400" />
                  Purpose & Motivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DetailList items={detail.purpose} accentClass="text-blue-200 border-blue-400/50 bg-blue-500/10" />
              </CardContent>
            </Card>

            {/* Schematics/Development */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code className="h-5 w-5 text-green-400" />
                  Schematics & Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DetailList
                  items={detail.development}
                  accentClass="text-green-200 border-green-400/50 bg-green-500/10"
                />
              </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileText className="h-5 w-5 text-purple-400" />
                  Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DetailList
                  items={detail.documentation}
                  accentClass="text-purple-200 border-purple-400/50 bg-purple-500/10"
                />
              </CardContent>
            </Card>

            {/* Tests/Results */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <TestTube className="h-5 w-5 text-orange-400" />
                  Tests & Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DetailList
                  items={detail.results}
                  accentClass="text-orange-200 border-orange-400/50 bg-orange-500/10"
                />
              </CardContent>
            </Card>
          </div>

          {/* Future Plans and My Role - Half Width Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Future Plans */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  Future Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DetailList
                  items={detail.futurePlans}
                  accentClass="text-yellow-200 border-yellow-400/50 bg-yellow-500/10"
                />
              </CardContent>
            </Card>

            {/* My Role - Only for team projects */}
            {teamProject && (
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Target className="h-5 w-5 text-cyan-400" />
                    My Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <DetailList
                    items={teamProject.detail.myRole}
                    accentClass="text-cyan-200 border-cyan-400/50 bg-cyan-500/10"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectDetailWithErrorBoundary = () => (
  <ErrorBoundary>
    <ProjectDetail />
  </ErrorBoundary>
);

export default ProjectDetailWithErrorBoundary;
