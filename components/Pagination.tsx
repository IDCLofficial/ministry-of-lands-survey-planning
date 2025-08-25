"use client"
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

export type PaginationLabels = {
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
  ellipsis?: string;
};

export type PaginationProps = {
  currentPage: number; // 1-based
  totalCount: number; // total items
  pageSize: number; // items per page
  siblingCount?: number; // pages around current
  boundaryCount?: number; // pages at start/end
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  type: "news" | "events" | "media" | "projects";
  disabled?: boolean;
  className?: string;
  pageItemClassName?: string;
  activeItemClassName?: string;
  disabledItemClassName?: string;
  category?: string;
  getPageHref?: (page: number) => string | undefined; // if provided, renders <a>
  labels?: PaginationLabels;
  size?: 'sm' | 'md';
};

const DEFAULT_LABELS: Required<PaginationLabels> = {
  first: 'First',
  previous: 'Previous',
  next: 'Next',
  last: 'Last',
  ellipsis: '…',
};

// Compute the page items to render, including ellipses placeholders as '...'
function getPaginationRange(params: {
  totalPages: number;
  currentPage: number;
  siblingCount: number;
  boundaryCount: number;
}): (number | 'ellipsis')[] {
  const { totalPages, currentPage, siblingCount, boundaryCount } = params;

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  if (totalPages <= 0) return [];

  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages
  );

  const siblingsStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(
      currentPage + siblingCount,
      boundaryCount + siblingCount * 2 + 2
    ),
    endPages.length > 0 ? endPages[0] - 2 : totalPages - 1
  );

  const items: (number | 'ellipsis')[] = [];
  items.push(...startPages);

  if (siblingsStart > boundaryCount + 2) {
    items.push('ellipsis');
  } else if (boundaryCount + 1 < totalPages - boundaryCount) {
    items.push(boundaryCount + 1);
  }

  items.push(...range(siblingsStart, siblingsEnd));

  if (siblingsEnd < totalPages - boundaryCount - 1) {
    items.push('ellipsis');
  } else if (totalPages - boundaryCount > boundaryCount) {
    items.push(totalPages - boundaryCount);
  }

  items.push(...endPages);

  // Deduplicate in case of overlaps
  const deduped: (number | 'ellipsis')[] = [];
  for (const it of items) {
    if (deduped.length === 0 || deduped[deduped.length - 1] !== it) {
      deduped.push(it);
    }
  }
  return deduped;
}

function classNames(...args: Array<string | false | undefined>): string {
  return args.filter(Boolean).join(' ');
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  type,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  category,
  disabled = false,
  className,
  pageItemClassName,
  activeItemClassName,
  disabledItemClassName,
  getPageHref,
  labels: labelsProp,
  size = 'md',
}) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive pagination
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const totalPages = Math.max(0, Math.ceil(totalCount / pageSize));
  const labels = { ...DEFAULT_LABELS, ...(labelsProp || {}) };

  // Adjust pagination parameters based on screen size
  const responsiveSiblingCount = isMobile ? 0 : siblingCount;
  const responsiveBoundaryCount = isMobile ? 1 : boundaryCount;

  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;

  const baseItem =
    'inline-flex select-none items-center justify-center active:opacity-50 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-transform duration-150 active:scale-95';
  const sizeItem = size === 'sm' ? 'h-8 min-w-8 px-2 text-sm' : 'h-9 min-w-9 px-3';
  const activeItem = 'z-10 border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-50';

  const liBase = 'list-none';
  const containerBase = 'flex items-center gap-2 justify-center';

  const onPageChange = useCallback((page: number) => {
    if (type === "news") {
      if (!category) {
        router.push(`/news?page=${page}`);
      } else {
        router.push(`/news?category=${category}&page=${page}`);
      }
    }
    if (type === "events") {
      if (!category) {
        router.push(`/events?page=${page}`);
      } else {
        router.push(`/events?category=${category}&page=${page}`);
      }
    }
    if (type === "media") {
      if (!category) {
        router.push(`/media?page=${page}`);
      } else {
        router.push(`/media?category=${category}&page=${page}`);
      }
    }
    if (type === "projects") {
      if (!category) {
        router.push(`/projects?page=${page}`);
      } else {
        router.push(`/projects?category=${category}&page=${page}`);
      }
    }
  }, [type, category])

  const onClick = (page: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (disabled) return;
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  if (totalPages <= 1) return null; // nothing to paginate

  const renderControl = (
    label: string,
    targetPage: number,
    isDisabled: boolean,
    ariaLabel: string
  ) => {
    const content = (
      <span className="pointer-events-none">{label}</span>
    );

    const commonProps = {
      'aria-label': ariaLabel,
      'aria-disabled': isDisabled || undefined,
      className: classNames(
        baseItem,
        sizeItem,
        pageItemClassName,
        isDisabled && (disabledItemClassName || 'opacity-50 cursor-not-allowed')
      ),
      onClick: (e: React.MouseEvent) => onClick(targetPage, e),
    } as const;

    if (getPageHref) {
      const href = getPageHref(targetPage) || '#';
      return (
        <button type="button" {...(commonProps as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)} disabled={isDisabled}>
          <a className='' href={href} onClick={(e) => onClick(targetPage, e)}>
            {content}
          </a>
        </button>
      );
    }

    return (
      <button type="button" {...(commonProps as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)} disabled={isDisabled}>
        {content}
      </button>
    );
  };

  const pages = getPaginationRange({
    totalPages,
    currentPage,
    siblingCount: responsiveSiblingCount,
    boundaryCount: responsiveBoundaryCount,
  });

  return (
    <nav aria-label="Pagination Navigation" className={classNames(containerBase, className)}>
      <ul className="flex items-center gap-2 m-0 p-0">
        {showFirstLast && (
          <li className={liBase}>
            {renderControl(labels.first, 1, disabled || isFirst, 'Go to first page')}
          </li>
        )}
        {showPrevNext && (
          <li className={liBase}>
            {renderControl(labels.previous, Math.max(1, currentPage - 1), disabled || isFirst, 'Go to previous page')}
          </li>
        )}

        {pages.map((p, idx) => (
          <li key={`${p}-${idx}`} className={liBase}>
            {p === 'ellipsis' ? (
              <span
                aria-hidden
                className={classNames(baseItem, sizeItem, pageItemClassName, 'border-transparent bg-transparent hover:bg-transparent cursor-default')}
              >
                {labels.ellipsis}
              </span>
            ) : getPageHref ? (
              <a
                href={getPageHref(p) || '#'}
                aria-current={p === currentPage ? 'page' : undefined}
                className={classNames(
                  baseItem,
                  sizeItem,
                  pageItemClassName,
                  p === currentPage && (activeItemClassName || activeItem)
                )}
                onClick={(e) => onClick(p, e)}
              >
                {p}
              </a>
            ) : (
              <button
                type="button"
                aria-current={p === currentPage ? 'page' : undefined}
                className={classNames(
                  baseItem,
                  sizeItem,
                  pageItemClassName,
                  p === currentPage && (activeItemClassName || activeItem)
                )}
                onClick={(e) => onClick(p, e)}
                disabled={disabled || p === currentPage}
              >
                {p}
              </button>
            )}
          </li>
        ))}

        {showPrevNext && (
          <li className={liBase}>
            {renderControl(labels.next, Math.min(totalPages, currentPage + 1), disabled || isLast, 'Go to next page')}
          </li>
        )}
        {showFirstLast && (
          <li className={liBase}>
            {renderControl(labels.last, totalPages, disabled || isLast, 'Go to last page')}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;